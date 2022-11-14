# Long Practice: Rock, Paper, Scissors Refactor

In this practice, you will be refactoring code to follow the Single
Responsibility Principle and the DRY Principle. You will also practice reading
test specs.

## Set Up

Clone the practice from the [starter].

Run `npm install` to install all dependencies.

## Background and Context

You will be refactoring a working terminal game of the classic Rock, Paper,
Scissors game.

In this game, you either pick either rock, paper or scissors while an AI
opponent does the same. Then the choices are compared to determine the winner.

* Rock beats scissors, loses to paper and ties with rock.
* Paper beats rock, loses to scissors and ties with paper.
* Scissors beats paper, loses to rock and ties with scissors.

To play the game, run `node game.js` in your terminal. Follow the
intructions on the screen and input one letter commands and press enter to
commit the command.

Play the terminal game a few times to see how it works and how the game state
displayed gets updated based on wins, losses, and ties between you and the AI.

Now, take a look at the __game.js__ file.

At the top of the file, you should notice the `VALID_MOVES` constant which is
an object that contains nested objects. The nested objects contains information
about each valid move in the game, rock, paper, and scissors.

Take a look at the next section that contains the data of the game state.
Initially, the game state should note that there are zero wins, losses, and ties
between the player and the AI.

Don't change the `VALID_MOVES` constant or the initial game state.

In the next section are helper functions that are not filled out yet. More on
those later.

Next, there's the main function, `promptInput(rl)` that takes in a `readline`
interface and will ask the player in the terminal to input commands. Based on
those commands, the game state will change. Take a moment to read each line of
code and figure out what each line is doing.

The final section contains code to initialize and start the game by printing the
list of valid commands available to the player, creating a readline interface,
and calling `promptInput(rl)` with the created interface.

The code is working and all the test specs for the `promptInput(rl)` main
function should be passing. You can run the following command to make sure
`promptInput(rl)` is working as intended:

```shell
npm test -- --bail test/promptInput-spec.js
```

Your task is to refactor the code in the main function, `promptInput(rl)`, for
readability and maintainability using DRY and SRP principles. The helper
functions are skeletons to guide you in refactoring the code.  They have
been provided to you for this practice, but it will normally be up to you
to use your experience and judgment to decide the best way to do this.

Follow the instructions to fill out the code in each helper function and
refactor the `promptInput(rl)` main function.

## Phase 1: `printHelp()`

In this phase, you will fill out the code in the `printHelp()` helper function
and refactor the `promtInput(rl)` main function to use the `printHelp()`
function.

Take a look at the test specs for the `printHelp()` function in
__test/phase-01-printHelp-spec.js__. You can run the test specs in the file
with the following command:

```shell
npm test test/phase-01-printHelp-spec.js
```

`npm test` is equivalent to running `mocha`, a testing framework for Node.js
that you'll learn more about later this module.
`test/phase-01-printHelp-spec.js` is the name of the test spec file that you
want to run. (If you don't specify the file you wish to run, it will just run
all the test specs in every file in the __test__ folder.)

Can you guess what the test specs for `printHelp()` are testing for? Take at
least 5 minutes to practice skimming and reading the test specs.

**Don't peak below until you make an educated guess about what the test specs
are testing for!**

.
.
.
.
.
.
.
.
.
.

<details><summary><code>printHelp()</code>test specs:</summary>The function
should print outputs in the following order:
<pre><code>"  Type 'r' for Rock"
"  Type 'p' for Paper"
"  Type 's' for Scissors"
"  Type 'q' to quit"
"  Type 'h' for a list of valid commands\n"</code></pre>
</details>

Now, make the test specs for the `printHelp()` helper function pass!

Once you pass the test specs, refactor the `promptInput(rl)` main function to
use the `printHelp()` helper function. Which coding principles are you applying
by refactoring the code this way?

Once you finish refactoring `promptInput(rl)`, are there any patterns that could
be DRYed up in the `printHelp()` helper function that you missed? Eliminate
those patterns now!

## Phase 2: `getWinner(move1, move2)`

In this phase, you will fill out the code in the `getWinner(move1, move2)`
helper function and refactor the `promtInput(rl)` main function to use the
`getWinner(move1, move2)` function.

Take a look at the test specs for the `getWinner(move1, move2)` function in
__test/phase-02-getWinner-spec.js__. You can run the test specs in the file
with the following command:

```shell
npm test test/phase-02-getWinner-spec.js
```

Can you guess what the test specs for `getWinner(move1, move2)` are testing for?
Take at least 10 minutes to practice skimming and reading the test specs.

**Don't peak below until you make an educated guess about what the test specs
are testing for!**

.
.
.
.
.
.
.
.
.
.

<details><summary><code>getWinner(move1, move2)</code>test specs:</summary>The
function should return 1 if <code>move1</code> beats <code>move2</code>. It
should return -1 if <code>move1</code> loses to <code>move2</code>. And finally,
it should return 0 if <code>move1</code> ties with <code>move2</code>. The
<code>move1</code> and <code>move2</code> parameters should be valid move keys
which are strings of `r`, `s`, or `p`.
</details>

Now, make the test specs for the `getWinner(move1, move2)` helper function pass!

Once you pass the test specs, refactor the `promptInput(rl)` main function to
use the `getWinner(move1, move2)` helper function. Which coding principles are
you applying by refactoring the code this way?

Once you finish refactoring `promptInput(rl)`, are there any patterns that could
be DRYed up in the `getWinner(move1, move2)` helper function that you missed?
Eliminate those patterns now!

## Phase 3: `getCPUMove()`

In this phase, you will fill out the code in the `getCPUMove()` helper function
and refactor the `promtInput(rl)` main function to use the `getCPUMove()`
function.

Take a look at the test specs for the `getCPUMove()` function in
__test/phase-03-getCPUMove-spec.js__. You can run the test specs in the file
with the following command:

```shell
npm test test/phase-03-getCPUMove-spec.js
```

Can you guess what the test specs for `getCPUMove()` are testing for?
Take at least 10 minutes to practice skimming and reading the test specs.

**Don't peak below until you make an educated guess about what the test specs
are testing for!**

.
.
.
.
.
.
.
.
.
.

<details><summary><code>getCPUMove()</code>test specs:</summary>The
function should randomly return 'r', 's', or 'p'. 'r' should be returned at
least once after multiple calls to the function. 's' should be returned at least
once after multiple calls to the function. 'p' should be returned at least once
after multiple calls to the function.
</details>

Now, make the test specs for the `getCPUMove()` helper function pass!

Once you pass the test specs, refactor the `promptInput(rl)` main function to
use the `getCPUMove()` helper function. Which coding principles are
you applying by refactoring the code this way?

Once you finish refactoring `promptInput(rl)`, are there any patterns that could
be DRYed up in the `getCPUMove()` helper function that you missed? Eliminate
those patterns now!

## Phase 4: `processMove(cmd, cpu)`

In this phase, you will fill out the code in the `processMove(cmd, cpu)` helper
function and refactor the `promtInput(rl)` main function to use the
`processMove(cmd, cpu)` function.

Take a look at the test specs for the `processMove(cmd, cpu)` function in
__test/phase-04-processMove-spec.js__. You can run the test specs in the file
with the following command:

```shell
npm test test/phase-04-processMove-spec.js
```

Can you guess what the test specs for `processMove(cmd, cpu)` are testing for?
Take at least 10 minutes to practice skimming and reading the test specs.

**Don't peak below until you make an educated guess about what the test specs
are testing for!**

.
.
.
.
.
.
.
.
.
.

<details><summary><code>processMove(cmd, cpu)</code>test specs:</summary>The
function should print to the terminal the moves of the player and the CPU and
an explanation of if the player beat, lost to, or tied with the CPU. Then:
<ul>
  <li>If the <code>cpu</code> move is 'r', and the <code>cmd</code> move is 'r',
  then "You tie.\n" should be printed to the terminal.</li>
  <li>If the <code>cpu</code> move is 'r', and the <code>cmd</code> move is 'p',
  then "You win!\n" should be printed to the terminal.</li>
  <li>If the <code>cpu</code> move is 'r', and the <code>cmd</code> move is 's',
  then "You lose...\n" should be printed to the terminal.</li>
  <li>If the <code>cpu</code> move is 'p', and the <code>cmd</code> move is 'r',
  then "You lose...\n" should be printed to the terminal.</li>
  <li>If the <code>cpu</code> move is 'p', and the <code>cmd</code> move is 'p',
  then "You tie.\n" should be printed to the terminal.</li>
  <li>If the <code>cpu</code> move is 'p', and the <code>cmd</code> move is 's',
  then "You win!\n" should be printed to the terminal.</li>
  <li>If the <code>cpu</code> move is 's', and the <code>cmd</code> move is 'r',
  then "You win!\n" should be printed to the terminal.</li>
  <li>If the <code>cpu</code> move is 's', and the <code>cmd</code> move is 'p',
  then "You lose...\n" should be printed to the terminal.</li>
  <li>If the <code>cpu</code> move is 's', and the <code>cmd</code> move is 's',
  then "You tie.\n" should be printed to the terminal.</li>
</ul>
</details>

Now, make the test specs for the `processMove(cmd, cpu)` helper function pass!

Once you pass the test specs, refactor the `promptInput(rl)` main function to
use the `processMove(cmd, cpu)` helper function. Which coding principles are
you applying by refactoring the code this way?

Once you finish refactoring `promptInput(rl)`, are there any patterns that could
be DRYed up in the `processMove(cmd, cpu)` helper function that you missed?
Eliminate those patterns now!

<details><summary>Hint:</summary>Are there any helper functions that you should
use in <code>processMove(cmd, cpu)</code> instead of the
<code>promptInput(rl)</code> main function?</details>

## Phase 5: Anything else?

Do you see in any of the helper functions, main function, or when initializing
the game that can use refactoring?

<details><summary>Hint:</summary>Take a look at the section for initializing
the game, is there any familiar code there that you can refactor using the
<code>printHelp()</code> function?</details>

## Bonus Phase 6: Improve the Experience

Now you have refactored the code, see if you can improve the experience of the
game for the player. Identifying which part of the code needs to be changed
for a certain point of improvement should be easier now after the refactor!

[starter]: https://github.com/appacademy/practice-for-week-04-rock-paper-scissors-long-practice
