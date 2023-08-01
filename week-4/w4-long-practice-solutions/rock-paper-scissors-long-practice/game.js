const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  //!!START
  for (let [moveKey, moveInfo] of Object.entries(VALID_MOVES)) {
    console.log(`  Type '${moveKey}' for ${moveInfo.name}`);
  }
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");
  //!!END
}

function getWinner(move1, move2) {
  //!!START
  if (move1 === move2) return 0;  // tie
  return VALID_MOVES[move1].winsAgainst === move2 ? 1 : -1;
  //!!END
}

function getCPUMove() {
  //!!START
  const validMoveKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  return validMoveKeys[randomIndex];
  //!!END
}

function processMove(cmd, cpu) {
  //!!START
  console.log(`You pick ${cmd}, computer picks ${cpu}.`);

  let result = getWinner(cmd, cpu);
  if (result === 0) {
    console.log("You tie.\n");
    ties++;
  } else if (result === 1) {
    console.log("You win!\n");
    wins++;
  } else {
    console.log("You lose...\n");
    losses++;
  }
  //!!END
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      //!!ADD
      // console.log("  Type 'r' for Rock");
      // console.log("  Type 'p' for Paper");
      // console.log("  Type 's' for Scissors");
      // console.log("  Type 'q' to quit");
      // console.log("  Type 'h' for a list of valid commands\n");
      //!!END_ADD
      //!!START SILENT
      printHelp();
      //!!END
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]){
      //!!ADD
      // const validMoveKeys = Object.keys(VALID_MOVES);
      // const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
      // const cpu = validMoveKeys[randomIndex];

      // console.log(`You pick ${cmd}, computer picks ${cpu}.`);

      // if (cmd === cpu) { // tie
        // console.log("You tie.\n");
        // ties++;
      // }
      // else if (VALID_MOVES[cmd].winsAgainst === cpu) { // win
        // console.log("You win!\n");
        // wins++;
      // } else { // loss
        // console.log("You lose...\n");
        // losses++;
      // }
      //!!END_ADD
      //!!START SILENT
      const cpu = getCPUMove();
      processMove(cmd, cpu);
      //!!END
    } else {
      console.log("\nInvalid command.\n");
      //!!ADD
      // console.log("  Type 'r' for Rock");
      // console.log("  Type 'p' for Paper");
      // console.log("  Type 's' for Scissors");
      // console.log("  Type 'q' to quit");
      // console.log("  Type 'h' for a list of valid commands\n");
      //!!END_ADD
      //!!START SILENT
      printHelp();
      //!!END
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  //!!ADD
  // console.log("  Type 'r' for Rock");
  // console.log("  Type 'p' for Paper");
  // console.log("  Type 's' for Scissors");
  // console.log("  Type 'q' to quit");
  // console.log("  Type 'h' for a list of valid commands\n");
  //!!END_ADD

  //!!START SILENT
  printHelp();
  //!!END
  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};
