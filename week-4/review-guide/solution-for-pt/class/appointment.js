class Appointment {
  constructor(doctor, patient, month, date, year, hour) {
    this.doctor = doctor;
    this.patient = patient;
    this.month = month;
    this.date = date;
    this.year = year;
    this.hour = hour;

    //make sure that appt is between 8-5
    //make sure that appt is not in the past
    //make sure appt is in the future
    //make sure that appts dont overlap
    //make sure appts have accepted insurance

    const today = new Date();

    if (
      year < today.getFullYear() ||
      month < today.getMonth() ||
      (year === today.getFullYear() &&
        month === today.getMonth() &&
        date <= today.getDate())
    ) {
      throw new AppointmentError("Appointment must be in the future");
    }

    if (hour > 17 || hour < 8) {
      throw new AppointmentError("Invalid time slot");
    }
    if (!doctor.acceptsInsurance(patient.insurance)) {
      throw new AppointmentError("Patient's insurance not supported");
    }
    if (!doctor.addAppointment(this)) {
      throw new AppointmentError("Invalid time slot");
    }
  }
}

class AppointmentError extends Error {
  constructor(message) {
    super(message);
    this.name = "AppointmentError";
  }
}

module.exports = [Appointment, AppointmentError];
