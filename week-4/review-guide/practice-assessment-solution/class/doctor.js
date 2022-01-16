const User = require('./user')

class Doctor extends User {
    constructor(name, birthMonth, birthDate, birthYear) {
        super(name, birthMonth, birthDate, birthYear)
        this.acceptedInsurances = []
    }

    addInsurance(insurance){
        this.acceptedInsurances.push(insurance)
    }

    removeInsurance(insurance){
        const index = this.acceptedInsurances.indexOf(insurance)
        if (this.acceptedInsurances.includes(insurance)) {
            this.acceptedInsurances.splice(index, 1)
        }
    }

    acceptsInsurance(insurance){
        return this.acceptedInsurances.includes(insurance)
    }
}

module.exports = Doctor
