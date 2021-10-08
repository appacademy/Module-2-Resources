const User = require("./user");

class Patient extends User {
  constructor(name, birthMonth, birthDate, birthYear) {
    super(name, birthMonth, birthDate, birthYear);
    this.insurance = null;
  }
  setInsurance(insurance) {
    this.insurance = insurance;
  }
  getInsurance() {
    return this.insurance;
  }
}

module.exports = Patient;
