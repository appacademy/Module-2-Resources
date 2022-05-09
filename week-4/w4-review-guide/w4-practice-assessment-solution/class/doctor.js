const User = require('./user');

class Doctor extends User {
    constructor(name, month, date, year) {
        super(name, month, date, year);

        this.insurances = [];
        this.appointments = [];
    }

    acceptsInsurance(insurance) {
        return this.insurances.includes(insurance);
    }

    addInsurance(insurance) {
        if (!this.acceptsInsurance(insurance)) {
            this.insurances.push(insurance);
        }
    }

    removeInsurance(insurance) {
        const indexOfInsurance = this.insurances.indexOf(insurance);

        if (indexOfInsurance >= 0) {
            this.insurances.splice(indexOfInsurance, 1);
        }
    }

    addAppointment(appointment) {
        this.appointments.push(appointment);
    }

    checkAppointment(appointment) {
        // console.log(this.appointments);
        console.log(appointment);
        console.log(appointment.doctor);
        console.log(appointment.doctor.appointments);
        for (let currentAppt of this.appointments) {
            // {time} === {time} would always be false
            if (
                currentAppt.apptDate.toString() ===
                appointment.apptDate.toString()
            ) {
                return false;
            }
        }

        return true;
    }
}

const temp = new Doctor('Richard Kimble', 7, 13, 1942);
console.log(temp);

module.exports = Doctor;
