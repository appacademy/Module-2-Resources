# Practice: Basic Class Syntax

In this exercise, you will be creating a class by creating a constructor and
defining static and instance methods.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

## Directions

Implement the following in the __classes/person.js__ file.

Create a class `Person` that has the following:

1. instance variables that include `firstName`, `lastName`, and `age`
2. an instance method called `introduce` that will introduce the person by using
   `console.log` with a string saying, "Hi, I'm `<firstName>` `<lastName>`, and
   I'm `<age>` years old.".
3. a static method called `introducePeople` that will take in an array of
   `Person` instances. Have the method `console.log` an error message of 
   "introducePeople only takes an array as an argument." if the argument is not
   of type `Array`. Have the method `console.log` an error message of
   "All items in array must be Person class instances." if any of the items in
   the array are not instances of the `Person` class. If there are no errors
   logged to the console, call `introduce` on each of the `People` instances in
   the input array.

Run the test specs in the __test/person-spec.js__ file to test that you
have created the `Person` class correctly:

```shell
npm test
```