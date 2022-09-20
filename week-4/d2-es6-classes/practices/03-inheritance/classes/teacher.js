const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    // let combinedYears = 0;
    // teachers.forEach(teacher => {
    //   combinedYears += teacher.yearsOfExperience;
    // });
    // return combinedYears;
    return teachers.reduce((acc, teacher) => acc + teacher.yearsOfExperience, 0);
  }
}

// const shane = new Teacher('shane', 'wilkey', 'ds&a', 1.5);
// const ryan = new Teacher('ryan', 'schneider', 'ds&a', .5);

// console.log(Teacher.combinedYearsOfExperience([shane, ryan]));
// console.log(shane.introduce())
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
