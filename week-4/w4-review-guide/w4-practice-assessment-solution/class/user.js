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

        const monthOfBirth = this.birthdate.getMonth();
        const dayOfBirth = this.birthdate.getDate();

        if (
            today.getMonth() < monthOfBirth ||
            (today.getMonth() === monthOfBirth && today.getDate() < dayOfBirth)
        ) {
            age--;
        }

        /*
        --num return newNum
        num-- return oldNum
        */

        return age;
    }
}

module.exports = User;
