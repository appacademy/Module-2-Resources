const Person = require("./person");

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;

  };

  static combinedYearsOfExperience(teachers) {
    // let count = 0;
    // for(let teacher of teachers) {
    //   count += teacher.yearsOfExperience;
    // };
    // return count;
    return teachers.reduce((count, teacher) => {
    count += teacher.yearsOfExperience
    return count;
    },0)
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
