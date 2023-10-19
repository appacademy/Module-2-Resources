const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    // let sum = 0;
    // for (let teacher of teachers) {
    //   sum += teacher.yearsOfExperience;
    // }
    // return sum;

    return teachers.reduce((sum, teacher) => sum + teacher.yearsOfExperience, 0)
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
