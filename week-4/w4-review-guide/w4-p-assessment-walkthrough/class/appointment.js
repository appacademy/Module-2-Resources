class Appointment {
    constructor(doctor, patient, month, day, year, hour) {
        this.doctor = doctor;
        this.patient = patient;

        // month arg is already zero shifted (- 1)
        this.apptDate = new Date(year, month, day, hour);
        // console.log(month, this.apptDate.getMonth());

        const today = new Date();
        // Date.getTime() changes object to integer of date info
        if (this.apptDate.getTime() < today.getTime()) {
            throw new AppointmentError('Appointment must be in the future');
        }

        const patientInsurance = this.patient.getInsurance();
        if (!this.doctor.acceptsInsurance(patientInsurance)) {
            throw new AppointmentError("Patient's insurance not supported");
        }

        if (hour < 8 || hour > 17) {
            throw new AppointmentError('Invalid time slot');
        }

        if (!this.doctor.isValidAppointment(this)) {
            throw new AppointmentError('Invalid time slot');
        }

        // console.log(this);
        this.doctor.addAppointment(this);
    }
}

class AppointmentError extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = [Appointment, AppointmentError];
