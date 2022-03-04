# Practice: Context with Arrow functions

In this practice, you will explore arrow functions and their unique ability to
retain the context of where it was defined.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

## Instructions

You will be debugging a context bug by using a fat arrow function in the class
definition.

Take a look at the code in the __index.js__ file.

The code instantiates a new `User` which is imported from the
__classes/user.js__ file. An instance of a `User` has a property of `name` and
a method of `changeName(newName)` that will set the `name` property to the
`newName` passed in as an argument.

Back in the __index.js__ file, a function called
`greetAfterNameChange(changeName, newName)` is defined. This function accepts
a `changeName` function and invokes it with the `newName` passed in. The return
value of the `changeName` function is saved to a variable called `name` and is
printed to the console like so: `Hi my name is ${name}`.

If you run the __index.js__ file with `node index.js`, the following should be
printed to the terminal:

```plaintext
Hi my name is Elle
```

However, there is a problem with the code. When invoking
`greeAfterNamechange(changeName, newName)` with the `changeName` instance method
on the newly instantiated user, the context of the `changeName` function is lost
so there will be an error thrown when running the __index.js__ file.

Use your debugging skills to change the code to use an arrow function to solve
this context problem.

<details><summary>Hint: </summary>Use an arrow function somewhere in the
<code>User</code> class definition to make sure that the <code>changeName</code>
instance method retains its context.</details>