const Person = require('./person');

class Teacher extends Person {
    constructor(firstName, lastName, subject, yearsOfExperience) {
        super(firstName, lastName);
        this.subject = subject;
        this.yearsOfExperience = yearsOfExperience;
    }

    static combinedYearsOfExperience(teachers) {
        // return teachers.reduce(
        //     (accumulator, teacher) => teacher.yearsOfExperience + accumulator,
        //     0
        // );
        let totalYears = 0;
        for (let teacher of teachers) {
            totalYears += teacher.yearsOfExperience;
        }
        // console.log(teachers, 'teachers');
        // console.log(totalYears, 'total years');
        return totalYears;
    }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = Teacher;
} catch {
    module.exports = null;
}
