const User = require('./user');

class Doctor extends User {
    constructor(name, month, day, year) {
        super(name, month, day, year);
        this.acceptedInsurances = [];

        this.appointments = [];
    }

    acceptsInsurance(provider) {
        return this.acceptedInsurances.includes(provider);
    }

    addInsurance(provider) {
        if (!this.acceptsInsurance(provider)){
            this.acceptedInsurances.push(provider);
        }
        return this;
    }

    removeInsurance(provider) {
        // this.acceptedInsurances = this.acceptedInsurances.filter(el => {
        //     el !== provider
        // });
        const indexOfInsurance = this.acceptedInsurances.indexOf(provider);
        if (indexOfInsurance >= 0)
            this.acceptedInsurances.splice(indexOfInsurance, 1);
    
    }

    // {'key1': value1} === {'key1': value1} => false;
    checkAppointment(appointment) {
        for (let currentAppt of this.appointments) {
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