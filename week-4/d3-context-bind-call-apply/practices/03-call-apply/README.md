# Call and Apply Practice

In this exercise, you will be debugging code that has lost context.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

## Phase 1: Greet

Take a look at the code in the __greet.js__ file.

If you run the file with `node greet.js`, you will see the following printed
to the terminal:

```plaintext
undefined [object Object]!
undefined [object Object]!
```

Without modifying the `say` function, make the file print out the following:

```plaintext
Hello, John!
Hey there, Michael!
```

## Phase 2: Grades

Take a look at the code in the __grade.js__ file.

The code instantiates a new `Gradebook` imported from the
__classes/gradebook.js__ file.

If you run the __grade.js__ file with `node greet.js`, you will get an error.

Without modifying `GradeBook`, `grades`, or `gradesAvg`, can you correctly
print out the average of the grades with and without a 20 point bonus? A correct
function will return the following from `node grade.js`

```plaintext
Grade list
58
78
```