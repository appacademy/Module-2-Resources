const User = require('./user');

class Patient extends User {
    constructor(name, month, day, year) {
        super(name, month, day, year);

        this.insurance = null;
    }

    setInsurance(provider) {
        this.insurance = provider;
    }

    getInsurance() {
        return this.insurance;
    }
}

module.exports = Patient;