const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName)
    this.subject = subject
    this.yearsOfExperience = yearsOfExperience

    // console.log(this)
  }

  static combinedYearsOfExperience (teacherArr) {
    let count = 0

    // console.log(teacherArr)
    teacherArr.forEach(teacher => {
      // console.log(teacher.yearsOfExperience)
      count += teacher.yearsOfExperience
    })

    return count
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
