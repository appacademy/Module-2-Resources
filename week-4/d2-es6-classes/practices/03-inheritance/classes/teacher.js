const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(first, last, sub, years) {
    super(first, last);
    this.yearsOfExperience = years;
    this.subject = sub;
  }

  static combinedYearsOfExperience(teachers) {
    return teachers.reduce((count, teacher) => count + teacher.yearsOfExperience, 0);
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
