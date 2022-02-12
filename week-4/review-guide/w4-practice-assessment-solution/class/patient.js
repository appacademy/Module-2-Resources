const User = require('./user')

class Patient extends User {
    constructor(name, month, day, year) {
        super(name, month, day, year)

        this.insurance = null
    }

    setInsurance(insurance) {
        this.insurance = insurance
    }

    getInsurance() {
        return this.insurance
    }
}

module.exports = Patient
