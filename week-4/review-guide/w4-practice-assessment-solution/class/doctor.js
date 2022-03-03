const User = require('./user')

class Doctor extends User {
    constructor(name, month, day, year) {
        super(name, month, day, year)

        this.approvedInsurances = []
        this.appointments = []
    }

    acceptsInsurance(insurance) {
        return this.approvedInsurances.includes(insurance)
    }

    addInsurance(insurance) {
        this.approvedInsurances.push(insurance)
    }

    removeInsurance(insurance) {
        const locationOfInsurance = this.approvedInsurances.indexOf(insurance)
        this.approvedInsurances.splice(locationOfInsurance, 1)
    }

    checkAppointment(appointment) {
        for (const currentAppointment of this.appointments) {
            if (currentAppointment.date.toString() === appointment.date.toString()) {
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
