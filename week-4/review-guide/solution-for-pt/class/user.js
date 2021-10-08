class User {
  constructor(name, birthMonth, birthDate, birthYear) {
    this.name = name;
    this.birthday = new Date(birthYear, birthMonth - 1, birthDate);
  }

  getBirthday() {
    return this.birthday.toDateString();
  }

  getAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthday.getFullYear();

    if (
      today.getMonth() < this.birthday.getMonth() ||
      (today.getMonth() === this.birthday.getMonth() &&
        today.getDate() < this.birthday.getDate())
    ) {
      age--;
    }
      return age;
  }
}

module.exports = User;
