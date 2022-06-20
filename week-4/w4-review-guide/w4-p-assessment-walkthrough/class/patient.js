const User = require('./user');

class Patient extends User {
    constructor(name, birthMonth, birthDay, birthYear) {
        super(name, birthMonth, birthDay, birthYear);

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
