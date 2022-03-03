const Person = require("./person");

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    let count = 0;
    for (const teacher of teachers) {
      count += teacher.yearsOfExperience;
    }
    return count;
  }
}

const kristen = new Teacher('kristen', 'chauncey', 'computers', 12)

kristen.introduce()
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
