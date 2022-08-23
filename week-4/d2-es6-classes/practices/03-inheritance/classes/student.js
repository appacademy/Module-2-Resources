const Person = require('./person');

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(stood1, stood2) {

    // if (stood1.GPA === stood2.GPA) return "Both students have the same GPA."
    
    // return stood1.GPA > stood2.GPA ? `${stood1.firstName} ${stood1.lastName} has the higher GPA.` : `${stood2.firstName} ${stood2.lastName} has the higher GPA.`

    return stood1.GPA === stood2.GPA ? "Both students have the same GPA." : stood1.GPA > stood2.GPA ? `${stood1.firstName} ${stood1.lastName} has the higher GPA.` : `${stood2.firstName} ${stood2.lastName} has the higher GPA.`
  }
}

// const shane = new Student('shane', 'wilkey');
// console.log(shane.age)

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
