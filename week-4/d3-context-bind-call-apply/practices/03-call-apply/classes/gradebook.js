class GradeBook {
  constructor(gradeList) {
    this.gradeList = gradeList;
  }

  getAverage(bonus = 0) {
    let sum = 0;
    let graded = 0;
    this.gradeList.forEach((grade) => {
      sum += grade;
      graded++;
    });

    return sum / graded + bonus;
  }
}

module.exports = GradeBook;
