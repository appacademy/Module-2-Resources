const User = require("./user");

class Doctor extends User {
  constructor(name, birthMonth, birthDate, birthYear) {
    super(name, birthMonth, birthDate, birthYear);
    this.insurance = [];
    this.appointments = [];
  }
  addInsurance(insurance) {
    if (this.insurance.indexOf(insurance) < 0) {
      this.insurance.push(insurance);
    }
  }
  acceptsInsurance(insurance) {
    return this.insurance.indexOf(insurance) >= 0;
  }
  removeInsurance(insurance) {
    const insIdx = this.insurance.indexOf(insurance);
    if (insIdx >= 0) {
      this.insurance.splice(insIdx, 1);
    }
  }
  addAppointment(appointment) {
    for (let i = 0; i < this.appointments.length; i++) {
      let appt = this.appointments[i];
      if (
        appt.year === appointment.year &&
        appt.month === appointment.month &&
        appt.date === appointment.date &&
        appt.hour === appointment.hour
      ) {
        return false;
      }
    }
      this.appointments.push(appointment);
      return true;
  }
}

module.exports = Doctor;
