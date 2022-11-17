//!!START
class Dog {
	constructor(name) {
		this.name = name;
	}

	static makeJet() {
		return new this('Jet')
	}

	speak(word) {
		return this.name + " says " + word;
	}

	changeName(newName) {
		this.name = newName;
		return this.name;
	}
}
//!!END


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
