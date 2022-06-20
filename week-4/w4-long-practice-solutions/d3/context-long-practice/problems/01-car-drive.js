class Car {
	constructor() {
		this.speed = 0;
	}

	drive(newSpeed) {
		this.speed = newSpeed;
		return newSpeed;
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
