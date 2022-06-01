const Person = require('./person');

class Teacher extends Person {
    constructor(firstName, lastName, subject, yearsOfExperience) {
        super(firstName, lastName);
        this.subject = subject;
        this.yearsOfExperience = yearsOfExperience;
    }

    static combinedYearsOfExperience(teachers) {
        // console.log(teachers);

        let totalYears = 0;

        for (const teacher of teachers) {
            totalYears += teacher.yearsOfExperience;
        }

        // console.log(totalYears);
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
