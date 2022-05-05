# Connect Four

In this project, you will create a command-line Connect Four game. To do this,
you will fill out two classes, `cursor.js` and `connect-four.js`. `cursor.js`
contains logic for navigating around the board while `connect-four.js`
contains the game logic.

To render the game, you have been given a `Screen` API that handles
command-line rendering. You do not need to understand how the code in `Screen`
works but you will need to make use of the commands provided. The API is
documented below. Try out the commands to see how they work.

To process keypresses, you will need to load `Command` objects into the Screen
API using `Screen.addCommand`. This function takes a `key` which triggers the
command, a string `description`, and an `action` callback which is executed
when `key` is pressed.

The game should alternate turns between `O` and `X` until one player wins or
the game ends in a tie.

Clone the project from the [starter].

## Running the game

1. Type `npm install` to install all packages
2. Run `node game.js` to run the game
3. Run `mocha` to run tests

## Tasks

1. Fill out movement logic in `class/cursor.js` until `mocha
   test/cursor-spec.js` passes all tests
2. Fill out game logic in `class/connect-four.js` until `mocha
   test/connect-four-spec.js` passes all tests
3. Create commands for cursor movement in `connect-four.js` that call
   `cursor.left`, and `cursor.right`
4. Use `setBackgroundColor` and `resetBackgroundColor` in `cursor.js` to
   highlight the cursor's current position on the grid
5. Create a command in `connect-four.js` that places a move in the given
   column
6. Fill out the game state in `connect-four.js` that checks for wins after
   each move

## Screen API

`Screen` is a static class with the following methods. You do not need to
modify this class at all. The functionality you will need is documented below.

### Initialize

* `Screen.initialize(numRows, numCols)` will initialize a grid with the given
  dimensions.

### Initialize

* `Screen.setGridlines(gridLines)` will insert lines between each grid element
  is `gridLines` is true, or hide them if `gridLines` is false.

### Commands

* `Screen.addCommand(key, description, action)` will add a command that calls
  the `action` callback anytime `key` is typed on the keyboard. `description`
  will be displayed in the help message.
* `Screen.printCommands()` will show a list of all loaded commands and their
  descriptions.

### Updating the grid

* `Screen.setGrid(row, col, char)` sets the character at `row` and `col` to
  the given `char`.
* `Screen.setTextColor(row, col, color)` sets the text color at `row` and
  `col` to the given `color`.
* `Screen.setBackgroundColor(row, col, color)` sets the background color at
  `row` and `col` to the given `color`.

Valid colors are:
  * black
  * red
  * green
  * yellow
  * blue
  * cyan
  * white
  * magenta

### Quitting

* `Screen.setQuitMessage(quitMessage)` sets a message to be printed when the
  user quits.
* `Screen.quit(showMessage=true)` quits the game and prints the message if
  `showMessage` is true.

### Rendering

* `Screen.render()` will update the display. This must be called anytime the
  grid or messages change.

### Displaying a message

* `Screen.setMessage(msg)` takes in a string to be printed below the grid each
  time it is rendered.

[starter]: https://github.com/appacademy-starters/connect-four-refresh-starter