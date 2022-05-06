class Appointment {
    constructor(doctor, patient, month, date, year, hour) {
        this.doctor = doctor;
        this.patient = patient;
        this.apptDate = new Date(year, month, date, hour);

        const today = new Date();
        // console.log(today.getTime());

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

        // check apopintment if valid, if not throw error
        if (!this.doctor.checkAppointment(this)) {
            throw new AppointmentError('Invalid time slot');
        }

        // if all else is good, add new appointment
        this.doctor.addAppointment(this);
    }
}

class AppointmentError extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = [Appointment, AppointmentError];
