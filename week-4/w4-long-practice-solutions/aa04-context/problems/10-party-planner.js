// Your code here
class PartyPlanner {
  constructor() {
    this.guestList = [];
  }

  addToGuestList(name) {
    this.guestList.push(name);
  }

  throwParty() {
    return !this.guestList.length
      ? "Gotta add people to the guest list"
      : `Welcome to the party ${this.guestList.join(" and ")}`;
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = PartyPlanner;
} catch {
  module.exports = null;
}
