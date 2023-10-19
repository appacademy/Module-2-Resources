# Practice: Polymorphism

**Polymorphism** is a principle that allows one method to have different
implementations for inherited classes. In this practice, you will be writing
code that demonstrates this principle.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

## Directions

Implement the following in the __classes__ folder.

Overwrite `Person`'s `introduce` instance method in `Student` and `Teacher`
classes.

1. `Student`'s `introduce` should return: "Hello. I am `<firstName>`
   `<lastName>`, and I study `<major>`."
2. `Teacher`'s `introduce` should return: "Hello. I am `<firstName>`
   `<lastName>`, and I have been teaching `<subject>` for `<yearsOfExperience>`
   years."

Run the test specs in the __test/introduce-spec.js__ file to test that you
have implemented the methods correctly:

```shell
npm test test/introduce-spec.js
```
