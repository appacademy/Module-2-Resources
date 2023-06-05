//!!START
class Calculator {
	constructor() {
		this.total = 0;
	}

	add (num) {
		this.total += num;
		return this.total;
	}

	subtract (num) {
		this.total -= num;
		return this.total;
	}

	divide (num) {
		this.total /= num;
		return this.total;
	}

	multiply = function(num) {
		this.total *= num;
		return this.total;
	}
}
//!!END


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
