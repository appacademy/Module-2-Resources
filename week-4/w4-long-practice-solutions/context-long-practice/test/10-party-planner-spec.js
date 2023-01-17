const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const PartyPlanner = require("../problems/10-party-planner.js");

describe("PartyPlanner", function () {
  it("should return an object with a guestList property and throwParty and addToGuestList functions", function () {
    const party1 = new PartyPlanner();

    expect(party1.guestList).to.eql([]);
    expect(party1.throwParty).to.be.a("function");
    expect(party1.addToGuestList).to.be.a("function");
  });

  describe("addToGuestList()", () => {
    it("should intake a name and add it to the party guestList property", function () {
      const party1 = new PartyPlanner();
      party1.addToGuestList("James");
      const party2 = new PartyPlanner();
      party2.addToGuestList("Lucy");

      expect(party1.guestList).to.include("James");
      expect(party2.guestList).to.include("Lucy");
      expect(party2.guestList).not.to.include("James");
    });
  });

  describe("throwParty()", () => {
    context("with no guests added to the guestList", () => {
      it("should return a string requesting more guests", () => {
        const party1 = new PartyPlanner();

        expect(party1.throwParty()).to.eql(
          "Gotta add people to the guest list"
        );
      });
    });

    context("with people added to the list", () => {
      it("should throw a party with all the current guests", function () {
        const party1 = new PartyPlanner();
        party1.addToGuestList("James");
        const party2 = new PartyPlanner();
        party2.addToGuestList("Lucy");

        expect(party1.throwParty()).to.equal("Welcome to the party James");
        expect(party2.throwParty()).to.equal("Welcome to the party Lucy");
        party1.addToGuestList("Derek");
        party2.addToGuestList("Johnny")
        expect(party1.throwParty()).to.equal("Welcome to the party James and Derek");
        expect(party2.throwParty()).to.equal("Welcome to the party Lucy and Johnny")
      });
    });
  });
});
