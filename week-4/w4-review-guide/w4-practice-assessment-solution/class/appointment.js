class Appointment {
    constructor(doctor, patient, month, day, year, hour) {
        this.doctor = doctor;
        this.patient = patient;
        this.date = new Date(year, month, day, hour);

        const today = new Date();
        // console.log(this.date.getTime())
        // console.log(today.getTime())

        if (this.date.getTime() < today.getTime()) {
            throw new AppointmentError("Appointment must be in the future");
        }

        if (!doctor.acceptsInsurance(patient.insurance)) {
            throw new AppointmentError("Patient's insurance not supported")
        }

        if (hour < 8 || hour > 17) {
            throw new AppointmentError("Invalid time slot");
        }

        if (doctor.checkAppointment(this)) {
            throw new AppointmentError("Invalid time slot");
        }

        doctor.addAppointment(this);
    }


};

class AppointmentError extends Error {
    constructor(message) {
        super(message)
    }
};


module.exports = [Appointment, AppointmentError];