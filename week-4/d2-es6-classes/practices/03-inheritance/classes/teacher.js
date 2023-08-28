const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    if (typeof yearsOfExperience === 'number'){
      this.yearsOfExperience = yearsOfExperience;
    } else {
      this.yearsOfExperience = null;
    }
  }

  static combinedYearsOfExperience(teachers) {
    // let years = 0;
    // for (let i = 0; i < teachers.length; i++) {
    //   let teacher = teachers[i];
    //   years += teacher.yearsOfExperience;
    // }
    // return years;
    return teachers.reduce((years, teacher) => years + teacher.yearsOfExperience, 0)
  }
}

const shane = new Teacher('shane', 'wilkey', 'software engineering', '2 years')
console.log(shane)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
