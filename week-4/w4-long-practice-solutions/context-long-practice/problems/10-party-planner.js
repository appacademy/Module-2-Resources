//!!START
class PartyPlanner {
	constructor() {
		this.guestList = [];
	}

	throwParty() {
		if (this.guestList.length > 0) {
			return "Welcome to the party " + this.guestList.join(" and ");
		} else {
			return "Gotta add people to the guest list";
		}
	}

	addToGuestList(name) {
		this.guestList.push(name);
	}
}
//!!END


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
