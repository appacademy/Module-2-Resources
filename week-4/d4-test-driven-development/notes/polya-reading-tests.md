# How to Solve Any Test Spec

You'll learn a lot here at App Academy but what do you do when you come
across a test spec you don't know how to solve?

You're going to re-learn four steps to solve **any** problem. You read that
right: you can apply these steps to ANY problem.

1. Understand the problem
2. Make a plan
3. Carry out the plan
4. Look back and improve your solution

Credit to mathematician [George Polya][polya] for coming up with these steps.

## 1. Understand the specs

Seems obvious, right? Don't take this step lightly! This is the most important
and usually the most difficult step. If you understand the problem, the plan
becomes obvious. If you have a solid plan, the code is easy to write.
First, you **must** understand the specs. Ask yourself what are the specs
trying to test.

Let's say you're looking at a test spec and are given the following specs:

```js
describe ('Cursor', function () {

  let cursor;

  beforeEach(function() {
    cursor = new Cursor(3, 3);
  });


  it('initializes for a 3x3 grid and sets the cursor at [0,0]', function () {
    expect(cursor.numRows).to.equal(0);
    expect(cursor.numCols).to.equal(0);
    expect(cursor.row).to.equal(0);
    expect(cursor.col).to.equal(0);
  });


  it('correctly processes down inputs', function () {

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);
  });


  it('correctly processes up inputs', function () {

    cursor.up();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);

    cursor.up();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
  });


  it('processes right inputs', function () {

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);
  });


  it('processes left inputs', function () {

    cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

    cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
  });

});
```

Take a few minutes, and carefully read over the specs to make sure you
understand.

* What are the specs asking you to do?
* Can you restate the specs in your own words?
* Do you understand all of the words in the specs?
* Do you have enough information to solve the specs?
* Do you understand what the specs are trying to test?

Specifically, what is the class that is focused on? What needs to be in the constructor, and what default attributes might be needed? Do you need to create any instance or static methods, or set up any inheritance across classes?

You should be speaking these thoughts out loud. Practice
sharing your thoughts out loud while you are pair programming as well.
Sometimes there is not enough information to solve the problem and you need to
ask a question to clarify.

Remember, asking great questions is more impressive than knowing all the
answers!

## 2. Make a plan

Once you have a good understanding of the problem, you may again be tempted to
start writing code. Hang on! A few minutes spent planning can save you hours
of coding down the wrong path.

1. Break down the specs into smaller steps
2. Draw out the specs
3. Solve a simpler version of the specs, or tackle one spec at a time
4. Look for patterns
5. Work backward
6. Guess and check
7. Test your code

In computer science, like any science, it's perfectly reasonable to come up
with a hypothesis (guess) and then test it out (check). Get creative!

Let's try to break down the specs and try to decipher what it is testing.

```js
describe ('Cursor', function () {

  let cursor;

  beforeEach(function() {
    cursor = new Cursor(3, 3);
  });
    // create a cursor instance

  it('initializes for a 3x3 grid and sets the cursor at [0,0]', function () {
    expect(cursor.numRows).to.equal(0);
    expect(cursor.numCols).to.equal(0);
    expect(cursor.row).to.equal(0);
    expect(cursor.col).to.equal(0);
  });
    // This tests for an initialized 3x3 grid, the cursor starts at [0,0].
    // That would look like this:
    // grid = [['X',' ',' '],
    //         [' ',' ',' '],
    //         [' ',' ',' ']]

  it('correctly processes down inputs', function () {
    // the cursor will move down one index in the row every time
    // the down instance method is called on the cursor instance.
    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);
    // grid = [[' ',' ',' '],
    //         ['X',' ',' '],
    //         [' ',' ',' ']]
    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);
    // grid = [[' ',' ',' '],
    //         [' ',' ',' '],
    //         ['X',' ',' ']]
    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);
    // This input tests a little differently after 3 down inputs have been
    // applied it does not go any further. Why? Because, the grid is limited to
    // a 3x3. There is no where else for the cursor to go.
    // grid = [[' ',' ',' '],
    //         [' ',' ',' '],
    //         ['X',' ',' ']]

  });


  it('correctly processes up inputs', function () {
    // given an input the cursor will move up one index in the row when the up
    // input is called.
    cursor.up();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
    // Since the test will start at the the row and column indexes of [0,0]
    // the cursor will stay at its starting point when initialized.
    // grid = [['X',' ',' '],
    //         [' ',' ',' '],
    //         [' ',' ',' ']]
    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);
    // A down input has been applied thus expecting the cursor to move down one
    // index in the row.
    // grid = [[' ',' ',' '],
    //         ['X',' ',' '],
    //         [' ',' ',' ']]
    cursor.up();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
    // Once the down input has been applied we can now test the up input
    // to see if we get the expected result from the input, moving back to
    // it's starting position.
    // grid = [['X',' ',' '],
    //         [' ',' ',' '],
    //         [' ',' ',' ']]
  });

// The right and left specs are similar to the up and down specs.
// Try figuring out how to solve the specs on your own.
});
```

In interviews and pair programming, communication is key. Get used to sharing
your thought process and plan out loud. A good approach is to ask: "Here's
what I'm thinking. Am I on the right track?"

Here's a plan for the cursor specs:

```
1. Create a cursor class that is set with rows and columns.
2. Set a cursor to start at the indexes of [0, 0] for a 3x3 grid.
3. Create an input for the cursor to move down through the grid.
4. Repeat the previous step for up, left and right inputs.
5. Check the tests to see if they work as expected.
6. Evaluate any errors that your test specs give if any.
7. Use Polya to solve your errors.
```

Sounds good! Now you can start coding!

## 3. Carry out the plan

This is the easiest of all the steps but it's also the one where most people
get stuck. The reason for that is usually from coding without a plan, or
executing a flawed plan because they don't quite understand the problem. If
you've put time into steps 1 and 2, step 3 is mostly remembering syntax.

```js
class Cursor {

  constructor(numRows, numCols) {
    // Set a cursor to the [0,0] in a 3x3 grid.
  }

    // Apply an input that moves the cursor through the grid for down inputs.

    // Apply an input that moves the cursor through the grid for up inputs.

    // Apply an input that moves the cursor through the grid for left inputs.

    // Apply an input that moves the cursor through the grid for right inputs.

}
```

Here, you can take your plan and drop it straight into your code via comments.
Now, you just have to translate the comments into code.

```js
const Grid = require("./grid")

class Cursor {

    // Set a cursor to the [0,0] in a 3x3 grid.
  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;
  }

    // Apply an input that moves the cursor through the grid for down inputs.
  down() {
    this.row++;
  }

    // Apply an input that moves the cursor through the grid for up inputs.
  up() {
    this.row--;
  }

    // Apply an input that moves the cursor through the grid for left inputs.
  left() {
    this.col--;
  }

    // Apply an input that moves the cursor through the grid for right inputs.
  right() {
    this.col++;
  }
}

module.exports = Cursor;
```

## 4. Look back and improve your solution

Once you've come up with a solution, it's always good to revisit your code and
make improvements. Sometimes that means fixing bugs or testing edge cases.
Sometimes it means optimizing your code for readability or efficiency.

If you run your solution you can expect the inputs to move through your
grid like this for 3 right inputs and one down input:

```
grid = [[' ',' ',' '],
        [' ',' ','X'],
        [' ',' ',' ']]
```

Looks great! ...or does it? Upon closer inspection, you might realize that your
code does not maintain the current position of the cursor, nor are you able to
actually see your cursor in your testing. The test specs may not always test
every single detail of code that you write. Test specs are a guideline to follow but not
your full set of instructions. They are not always as intuitive as you want.
Since you've taken the time to understand the problem up front, you are able to
catch this error. So, how do you solve it? By following the problem-solving
steps and testing your code, of course!

Restart with understanding the problem. Walk through your instructions again
and understand what you have fulfilled with the test specs. Moreover, run your
test specs to see if you got them to pass. Try to figure out what you are missing.
Does your cursor recognize its current position? Can I distinguish my cursor
from my grid? Test, test and test again! (plan)

```js
const Grid = require("./grid")

class Cursor {

    // Set a cursor to the [0,0] in a 3x3 grid.
  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;
    // Distinguishes the color of the cursor from the grid
    this.gridColor = 'black';
    this.cursorColor = 'yellow';
  }

    // resets the background color of the grid
  resetBackgroundColor() {
    Grid.setBackgroundColor(this.row, this.col, this.gridColor);
  }

    // sets the background color of your cursor so you know where the cursor is
  setBackgroundColor() {
    Grid.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

    // renders the change of colors of where the cursor is in the row
  setRow(newRow) {
    this.resetBackgroundColor();
    this.row = Math.max(0, Math.min(this.numRows - 1, newRow));
    this.setBackgroundColor();
    Grid.render();
  }

    // renders the change of colors of where the cursor is in the column
  setCol(newCol) {
    this.resetBackgroundColor();
    this.col = Math.max(0, Math.min(this.numCols - 1, newCol));
    this.setBackgroundColor();
    Grid.render();
  }

    // Apply an input that moves the cursor through the grid for down inputs.
  down() {
    this.setRow(this.row + 1);
  }

    // Apply an input that moves the cursor through the grid for up inputs.
  up() {
    this.setRow(this.row - 1);
  }

    // Apply an input that moves the cursor through the grid for left inputs.
  left() {
    this.setCol(this.col - 1);
  }

    // Apply an input that moves the cursor through the grid for right inputs.
  right() {
    this.setCol(this.col + 1);
  }

    // Maintains the current position of the cursor.
  position() {
    return {row: this.row, col: this.col};
  }
}

module.exports = Cursor;
```

Now your code returns the inputs as expected as the cursor moves along the
columns and rows of the 3x3 grid. Wonderful! How do you check? Run the test!
Remember after each portion that you think you have accomplished you can always
run the tests to see if you get your expected results.

## Stuck? Take a step back. Run the test. Evaluate the error.

If you ever run into trouble while problem solving, **take a step back**. Run
the test specs. If your code isn't working, step back and re-examine your plan.
Outline the plan in comments or pseudocode. If you're having trouble coming up
with a plan, take a step back and make sure you really understand the problem.
Ask questions if you need to. Most people will get stuck on Step 3 but the
problem usually lies in Step 1 or 2.

Keep in mind that if you've put the time into steps 1 and 2, step 3 should be
easy. This plan also works in any language.

## What you've learned

You've learned 4 steps to solve **any** problem. Use them wisely!

1. Understand the problem
2. Make a plan
3. Carry out the plan
4. Look back and improve your solution


[polya]: https://en.wikipedia.org/wiki/How_to_Solve_It