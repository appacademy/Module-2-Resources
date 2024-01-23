const Person = require("./person");

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    // let YOE = 0;
    // for (let teacher of teachers) {
    //   YOE += teacher.yearsOfExperience;
    // }
    // return YOE;

    return teachers.reduce(
      (years, teacher) => teacher.yearsOfExperience + years,
      0
    );
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
