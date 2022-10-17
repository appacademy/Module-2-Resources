//!!START
class CallCenter {
	constructor(name) {
		this.name = name;
	}

	sayHello = () => {
		console.log("Hello this is " + this.name);
	}

    callMeLater(delay) {
        return setTimeout(() => this.sayHello(), delay);
    }
}
//!!END


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
