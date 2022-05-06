class User {
    constructor(name, month, date, year) {
        this.name = name;

        this.birthday = new Date(year, month - 1, date);
    }

    getBirthday() {
        return this.birthday.toDateString();
    }

    getAge() {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentDate = today.getDate();

        const birthMonth = this.birthday.getMonth();
        const birthDate = this.birthday.getDate();

        let age = today.getFullYear() - this.birthday.getFullYear();

        if (
            currentMonth < birthMonth ||
            (currentMonth === birthMonth && currentDate < birthDate)
        ) {
            age--;
        }

        return age;
    }
}

module.exports = User;
