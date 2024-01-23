Identify the definitions of SyntaxError, ReferenceError, and TypeError
- SyntaxError
    - an error in how the code is written
    - encountered at compile-time, ie the code cannot be parsed to determine the instructions
    - since our code cannot be run, SyntaxErrors cannot be caught by a try-catch block
    - common examples would be:
        - a misspelled function keyword (`function broken() {...}`)
        - incorrect number of curly braces
- ReferenceError
    - when a nonexistent variable is referenced
    - most commonly seen when you mistype a variable name, or refer to one out of the current scope
    ```javascript
    const puppy = "puppy";
    console.log(pupppy); // mistyped variable name
    ```

    ```javascript
    function callPuppy() {
        const puppy = "puppy";
    }
    console.log(puppy); // puppy is not in scope, it was created in the callPuppy function
    ```
- TypeError
    - when a variable or parameter is not of a valid type
    - can also be seen if we are trying to modify a value that cannot be changed (because a variable is declared with `const` instead of `let`, for example)
    ```javascript
    let dog; // Remember unassigned variables are undefined!
    dog(); // TypeError: dog is not a function

    const puppy = "puppy";
    puppy = "apple"; // TypeError: Assignment to constant variable.
    ```


