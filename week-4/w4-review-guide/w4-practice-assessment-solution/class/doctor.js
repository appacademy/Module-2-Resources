const User = require('./user');

class Doctor extends User {
    constructor(name, month, day, year) {
        super(name, month, day, year);

        this.acceptedInsurances = new Array();

        this.appointments = [];
    }

    acceptsInsurance(insurance) {
        return this.acceptedInsurances.includes(insurance);
    }

    addInsurance(insurance) {
        if (!this.acceptsInsurance(insurance)) {
            this.acceptedInsurances.push(insurance);
        }
    }

    removeInsurance(insurance) {
        const indexOfInsurance = this.acceptedInsurances.indexOf(insurance);
        if (indexOfInsurance >= 0)
            this.acceptedInsurances.splice(indexOfInsurance, 1);
    }

    //  {'key1': value1} ==== {'key1': value1} => false

    checkAppointment(appointment) {
        for (const currentAppt of this.appointments) {
            if (currentAppt.date.toString() === appointment.date.toString()) {
                return true;
            }
        }

        return false;
    }

    addAppointment(appointment) {
        this.appointments.push(appointment);
    }
}

module.exports = Doctor;
