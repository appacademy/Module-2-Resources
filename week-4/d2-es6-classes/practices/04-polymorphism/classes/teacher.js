const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  introduce() {
    return `Hello. I am ${this.firstName} ${this.lastName}, and I have been teaching ${this.subject} for ${this.yearsOfExperience} years.`;
  }

  static combinedYearsOfExperience(teachers) {
    let count = 0;
    for (const teacher of teachers) {
      count += teacher.yearsOfExperience;
    }
    return count;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
