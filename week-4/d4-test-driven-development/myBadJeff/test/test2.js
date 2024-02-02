const { expect } = require('chai');
const sinon = require("sinon");
const NFLFan = require("../class/nflfan.js");
const SuperFan = require("../class/superfan.js");


describe ('SuperFan', () => {

    let fan;
    beforeEach(() => {
        // Create a new Superfan before each test
        fan = new SuperFan("Jeff Granof", 33, "Packers");
    });

    describe("SuperFan should be a class that...", () => {
        it("is an instance of the NFLFan parent class", () => {
            expect(fan).to.be.an.instanceOf(NFLFan);
        });
        it('should set a `name` attribute on creation', () => {
            expect(fan.name).to.equal("Jeff Granof");
        });
        it('should set a `age` attribute on creation', () => {
            expect(fan.age).to.equal(33);
        });
        it('should set a favorite `team` attribute on creation', () => {
            expect(fan.team).to.equal("Packers")
        });
        it('should set a `gamesAttended` attribute on creation with a default value of 25', () => {
            expect(fan.gamesAttended).to.equal(25)
        });
        it('should set a `gamesThrownOutOf` attribute on creation with a default value of 0', () => {
            expect(fan.gamesThrownOutOf).to.equal(0)
        });
    });

    describe("SuperFan should have a `iAmNoTraitor` method", () => {
        it('that does not allow you to change your favorite `team` attribute', () => {
            let myTeam = fan.team
            fan.iAmNoTraitor("Bears")
            expect(fan.team).to.equal(myTeam);
        });

        beforeEach(() => {
            sinon.stub(console, "log");
        });
        afterEach(() => {
            console.log.restore();
        });
        it('and logs to the console "I would rather die than route for a different team!"', () => {
            fan.iAmNoTraitor("Cowboys")
            expect(console.log.calledWith("I would rather die than route for a different team!")).to.be
            .true;
        });
        it('and also logs to the console "${Favorite Team} for life!!!"', () => {
            fan.iAmNoTraitor("Cowboys")
            expect(console.log.calledWith(`${fan.team} for life!!!`)).to.be
                .true;
        });
    });

    describe("SuperFan should have a `iGotThrownOut` method", () => {
        it('that accepts an `opposingTeam` argument and adds one to the `gamesThrownOutOf` attribute', () => {
            let ejections = fan.gamesThrownOutOf;
            fan.iGotThrownOut("Chiefs");
            expect(fan.gamesThrownOutOf).to.equal(ejections + 1);
            fan.iGotThrownOut("Eagles");
            fan.iGotThrownOut("49ers");
            expect(fan.gamesThrownOutOf).to.equal(ejections + 3);
        });

        beforeEach(() => {
            sinon.stub(console, "log");
        });
        afterEach(() => {
            console.log.restore();
        });
        it('and logs to the console "When the ${favorite team} played the ${opposingTeam} I got thrown out!"', () => {
            let opponent = "49ers";
            fan.iGotThrownOut(opponent);
            expect(console.log.calledWith(`When the ${fan.team} played the ${opponent} I got thrown out!`)).to.be
            .true;
        });
        it('and also logs to the console "I was harassing the ref and security kicked me out, it was awesome!"', () => {
            fan.iGotThrownOut("Cowboys")
            expect(console.log.calledWith("I was harassing the ref and security kicked me out, it was awesome!")).to.be
                .true;
        });
    });
});
