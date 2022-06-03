const User = require('./user');

class Doctor extends User {
    constructor(name, birthMonth, birthDay, birthYear) {
        super(name, birthMonth, birthDay, birthYear);

        this.acceptedInsurances = [];
        this.appointments = [];
    }

    acceptsInsurance(insurance) {
        return this.acceptedInsurances.includes(insurance);
    }

    addInsurance(insurance) {
        this.acceptedInsurances.push(insurance);
    }

    removeInsurance(insurance) {
        const indexOfInsurance = this.acceptedInsurances.indexOf(insurance);
        this.acceptedInsurances.splice(indexOfInsurance, 1);
    }

    addAppointment(appointment) {
        this.appointments.push(appointment);
    }

    isValidAppointment(newAppointment) {
        for (const appointment of this.appointments) {
            // console.log(typeof appointment.apptDate);
            // console.log(typeof newAppointment.apptDate);
            if (
                appointment.apptDate.toString() ===
                newAppointment.apptDate.toString()
            ) {
                return false;
            }
        }

        return true;
    }
}

module.exports = Doctor;
