class Appointment {
    constructor(doctor, patient, month, day, year, hour) {
        this.doctor = doctor
        this.patient = patient

        this.date = new Date(year, month, day, hour)

        const today = new Date()

        if (day < today.getDate()) {
            throw new AppointmentError("Appointment must be in the future")
        }

        if (hour < 8 || hour > 17) {
            throw new AppointmentError("Invalid time slot")
        }

        const patientInsurance = patient.getInsurance()
        const doctorAcceptsInsurance = doctor.acceptsInsurance(patientInsurance)

        if (!doctorAcceptsInsurance) {
            throw new AppointmentError("Patient's insurance not supported")
        }

        if (this.doctor.checkAppointment(this)) {
            throw new AppointmentError("Invalid time slot")
        }

        this.doctor.addAppointment(this)
    }
}

class AppointmentError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = [Appointment, AppointmentError]
