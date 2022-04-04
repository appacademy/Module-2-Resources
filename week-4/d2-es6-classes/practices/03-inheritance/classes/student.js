const Person = require("./person");

// Your code here

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }
  static compareGPA(stud1, stud2) {
    if (stud1.GPA > stud2.GPA) {
      return `${stud1.firstName} ${stud1.lastName} has the higher GPA.`;
    } else if (stud2.GPA > stud1.GPA) {
      return `${stud2.firstName} ${stud2.lastName} has the higher GPA.`;
    } else {
      return "Both students have the same GPA";
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
