# Practice: Inheritance

**Inheritance** is a mechanism that passes traits of a parent class to its
descendants, which helps prevents duplication of code. In this exercise, you
will be implementing two classes that demonstrate class inheritance in
JavaScript.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

## Directions

Create the following child classes for the parent class of `Person`.

### `Student` class

Implement the following in the __classes/student.js__ file.

1. Create a new `Student` class and have its `constructor` call the `super()`,
   passing the parameters needed for a `Person` and a `constructor` function
   that takes in additional parameters for their `major` subject and `GPA`.
2. Create a static method called `compareGPA` which will take in two `Student`
   instances as the first and second parameter and return a string comparing
   the `GPA`s return "`<firstName>` `<lastName>` has the higher GPA." If they're
   equal, return "Both students have the same GPA."

Run the test specs in the __test/student-spec.js__ file to test that you
have created the `Student` class correctly:

```shell
npm test test/student-spec.js
```

### `Teacher` class

Implement the following in the __classes/teacher.js__ file.

1. Create a new `Teacher` class and have its `constructor` call the `super()`,
   passing parameters needed for a `Person` and a `constructor` function that
   takes in additional parameters for the `subject` they teach and their
   `yearsOfExperience`.
2. Create a static method called `combinedYearsOfExperience` that takes in an
   array of `Teacher` instances, `teachers`, as a parameter and returns the sum
   of the `yearsOfExperience` of all `teachers`.

Run the test specs in the __test/teacher-spec.js__ file to test that you
have created the `Teacher` class correctly:

```shell
npm test test/teacher-spec.js
```