const User = require('./user')

class Doctor extends User {
    constructor(name, birthMonth, birthDate, birthYear) {
        super(name, birthMonth, birthDate, birthYear)
        this.acceptedInsurances = []
        this.appointments = []
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

    checkAppointment(appointment) {
        for (let currAppointment of this.appointments) {
            // console.log(currAppointment.date.toDateString(), appointment.date.toDateString())
            if (currAppointment.date.toString() === appointment.date.toString()) {
                return true
            }
        }

        return false
    }

    addAppointment(appointment) {
        this.appointments.push(appointment)
    }
}

module.exports = Doctor
