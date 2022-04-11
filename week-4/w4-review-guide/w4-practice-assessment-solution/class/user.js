class User {
    constructor(name, month, day, year) {
        this.name = name;

        this.birthdate = new Date(year, month - 1, day);
    }

    getBirthday() {
        return this.birthdate.toDateString();
    }

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthdate.getFullYear();

        const birthMonth = this.birthdate.getMonth();
        const birthDay = this.birthdate.getDate();

        if (today.getMonth() < birthMonth ||
            today.getMonth() === birthMonth && today.getDate() < birthDay) {
        age--;
        }
        return age;
    }
}

module.exports = User;