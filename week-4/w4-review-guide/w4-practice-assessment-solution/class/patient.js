const User = require('./user');

class Patient extends User {
    constructor(name, month, date, year) {
        super(name, month, date, year);

        this.insurance = null;
    }

    setInsurance(insurance) {
        this.insurance = insurance;
    }

    getInsurance() {
        return this.insurance;
    }
}

module.exports = Patient;
