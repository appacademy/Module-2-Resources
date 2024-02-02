const { expect } = require('chai');
const sinon = require("sinon");
const NFLFan = require("../class/nflfan.js");


describe ('NFLFan', () => {

  let fan;
  beforeEach(() => {
    fan = new NFLFan("Jeff Granof", 33, "Packers");
  });

  describe("NFLFan should be a class that...", () => {
    it('should set a `name` attribute on creation', () => {
      expect(fan.name).to.equal("Jeff Granof");
    });
    it('should set a `age` attribute on creation', () => {
      expect(fan.age).to.equal(33);
    });
    it('should set a favorite `team` attribute on creation', () => {
      expect(fan.team).to.equal("Packers")
    });
    it('should set a `gamesAttended` attribute on creation with a default value of 0', () => {
      expect(fan.gamesAttended).to.equal(0)
    });
  });

  describe("NFLFan should have a `getOlder` method", () => {
    it('that increases the age attribute by one when invoked', () => {
      let originalAge = fan.age;
      fan.getOlder();
      expect(fan.age).to.equal(originalAge + 1);
      fan.getOlder();
      fan.getOlder();
      expect(fan.age).to.equal(originalAge + 3);
    });
  });

  describe("NFLFan should have a `iAmATraitor` method", () => {
    it('that accepts a new team and sets your favorite team to that value', () => {
      fan.iAmATraitor("Bears")
      expect(fan.team).to.equal("Bears");
    });

    beforeEach(() => {
      sinon.stub(console, "log");
    });
    afterEach(() => {
      console.log.restore();
    });

    it('and logs to the console "I am not a loyal fan!"', () => {
      fan.iAmATraitor("Cowboys")
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith("I am not a loyal fan!")).to.be
        .true;
    });
  });
  describe("NFLFan should have a `attendGame` method", () => {
    it('that increases the gamesAttended attribute by one when invoked', () => {
      let originalGames = fan.gamesAttended;
      fan.attendGame();
      expect(fan.gamesAttended).to.equal(originalGames + 1);
      fan.attendGame();
      fan.attendGame();
      expect(fan.gamesAttended).to.equal(originalGames + 3);
    });
  });

});
