const Person = require("./person");

// Your code here
class Student extends Person {
  constructor(firstName, lastName,major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }
  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else if (student2.GPA > student1.GPA) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    } else {
      return "Both students have the same GPA";
    }
  }
}

const Brad = new Student('brad', 'simpson',  'nose-picking', 4.0)
const Alex = new Student ('alex', 'pezzati', 'being-awesome', 4.0)
console.log(Brad)
console.log(Brad.introduce())
console.log(Student.compareGPA(Brad, Alex))
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
