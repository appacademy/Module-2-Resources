class Appointment {
    constructor(doctor, patient, month, day, year, hour) {
        this.doctor = doctor  // doctor class object
        this.patient = patient  // patient class object

        this.month = month
        this.day = day
        this.year = year
        this.hour = hour

        this.date = new Date(this.year, this.month - 1, this.day, this.hour)

        const today = new Date()

        if (this.day < today.getDate()) {
            throw new AppointmentError("Appointment must be in the future")
        }

        if (this.hour < 8 || this.hour > 17) {
            throw new AppointmentError("Invalid time slot")
        }

        const patientInsurance = this.patient.getInsurance()
        const doctorAcceptedInsurance = this.doctor.acceptsInsurance(patientInsurance)

        if (!doctorAcceptedInsurance) {
            throw new AppointmentError("Patient's insurance not supported")
        }

        // does the appointemtn already exist?
        // if truthy? don't throw error
        // then add appointment
        if (this.doctor.checkAppointment(this)) {
            throw new AppointmentError("Invalid time slot")
        }

        // console.log(this, 'APPOINTMENT CLASS')
        // console.log(this.doctor, 'DOCTOR')
        // console.log(this.doctor.name, 'DOCTOR NAME')
        // console.log(this.doctor.checkAppointment, 'FUNCTION SOMETHING')
        this.doctor.addAppointment(this)
    }
}

class AppointmentError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = [Appointment, AppointmentError]
