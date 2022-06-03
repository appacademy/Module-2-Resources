class User {
    constructor(name, birthMonth, birthDay, birthYear) {
        this.name = name;
        this.birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    }

    getBirthday() {
        return this.birthDate.toDateString();
    }

    getAge() {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentDate = today.getDate();

        const birthMonth = this.birthDate.getMonth();
        const birthDay = this.birthDate.getDate();

        let age = today.getFullYear() - this.birthDate.getFullYear();

        if (
            currentMonth < birthMonth ||
            (currentMonth === birthMonth && currentDate < birthDay)
        ) {
            --age;
        }

        return age;
    }
}

module.exports = User;
