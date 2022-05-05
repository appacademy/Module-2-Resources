const keypress = require('keypress');
const Command = require('./command');

class Screen {

  static numCols = 0;
  static numRows = 0;
  static grid = [];

  static borderChar = " ";
  static spacerCount = 1;

  static gridLines = false;

  static defaultTextColor = '\x1b[37m';  // White
  static defaultBackgroundColor = '\x1b[40m';  // Black

  static textColors = [];
  static backgroundColors = [];

  static message = "";

  static commands = {};

  static initialized = false;

  static initialize(numRows, numCols) {
    Screen.numRows = numRows;
    Screen.numCols = numCols;

    Screen.grid = [];
    Screen.textColors = [];
    Screen.backgroundColors = [];

    for (let row = 0 ; row < numRows ; row++) {
      Screen.grid.push(new Array(numCols).fill(" "));
      Screen.textColors.push(new Array(numCols).fill(Screen.defaultTextColor));
      Screen.backgroundColors.push(new Array(numCols).fill(Screen.defaultBackgroundColor));
    }

    Screen.setQuitMessage("\nThank you for playing! \nGoodbye.\n");
    const quitCmd = new Command('q', 'quit the game', Screen.quit);
    Screen.commands['q'] = quitCmd;

    Screen.initialized = true;

    Screen.waitForInput();
  }

  static setGridlines(gridLines) {
    Screen.gridLines = gridLines;
    Screen.render();
  }

  static printCommands() {

    console.log('');

    for (let cmd in Screen.commands) {
      let description = Screen.commands[cmd].description;
      console.log(`  ${cmd} - ${description}`);
    }

    console.log('');
  }

  static waitForInput() {
    keypress(process.stdin);

    process.stdin.on('keypress', function (ch, key) {

      if (!key) {
        console.log("Warning: Unknown keypress");
      } else if (!Screen.commands.hasOwnProperty(key.name)) {
        Screen.render();
        console.log(`${key.name} not supported.`);
        Screen.printCommands();
      } else {
        Screen.render();
        Screen.commands[key.name].execute();
      }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();
  }

  static setGrid(row, col, char) {
    if (!Screen.initialized) return;

    if (char.length !== 1) {
      throw new Error("invalid grid character");
    }
    Screen.grid[row][col] = char;
  }


  static addCommand(key, description, action) {

    if (key === 'q') {
      throw new Error("you cannot overwrite 'q'");
    }

    Screen.commands[key] = new Command(key, description, action);
  }




  static setQuitMessage(quitMessage) {
    Screen.quitMessage = quitMessage;
  }

  static quit(showMessage=true) {
    if (showMessage) console.log(Screen.quitMessage);
    process.exit(1);
  }

  static render() {

    if (!Screen.initialized) return;

    const spacer = new Array(Screen.spacerCount).fill(' ').join('');

    console.clear();

    let borderLength = Screen.numCols * (Screen.spacerCount * 2 + 1) + 2;
    if (Screen.gridLines) borderLength += Screen.numCols - 1;
    let horizontalBorder = new Array(borderLength).fill(Screen.borderChar).join('');

    console.log(horizontalBorder);

    for (let row = 0 ; row < Screen.numRows ; row++) {

      const rowCopy = [...Screen.grid[row]];

      for (let col = 0 ; col < Screen.numCols ; col++) {

        let textColor = Screen.textColors[row][col] ? Screen.textColors[row][col] : "";
        let backgroundColor = Screen.backgroundColors[row][col] ? Screen.backgroundColors[row][col] : "";
        if (!(textColor && backgroundColor)) textColor = '\x1b[0m';

        let vertLine = (Screen.gridLines && col > 0) ? '|' : '';
        rowCopy[col] = `${Screen.defaultBackgroundColor}${vertLine}\x1b[0m${textColor}${backgroundColor}${spacer}${rowCopy[col]}${spacer}\x1b[0m`;
      }

      if (Screen.gridLines && row > 0) {
        let horizontalGridLine = new Array(rowCopy.length * 4 - 1).fill('-');
        horizontalGridLine.unshift(`${Screen.borderChar}${Screen.defaultBackgroundColor}`);
        horizontalGridLine.push(`\x1b[0m${Screen.borderChar}`);
        console.log(horizontalGridLine.join(''));
      }

      // console.log(rowCopy);

      rowCopy.unshift(`${Screen.borderChar}`);
      rowCopy.push(`${Screen.borderChar}`);

      console.log(rowCopy.join(''));

    }

    console.log(horizontalBorder);

    console.log("");

    console.log(Screen.message);

  }

  static setTextColor(row, col, color) {

    if (!Screen.initialized) return;

    const colorCodes = {
      black: '\x1b[30m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      magenta: '\x1b[35m',
      cyan: '\x1b[36m',
      white: '\x1b[37m',
    }

    let code = colorCodes[color];

    if (!code) {
      throw new Error("Invalid color");
    }

    Screen.textColors[row][col] = code;
  }

  static setBackgroundColor(row, col, color) {

    if (!Screen.initialized) return;

    const colorCodes = {
      //background color
      blackBg: '\x1b[40m',
      redBg: '\x1b[41m',
      greenBg: '\x1b[42m',
      yellowBg: '\x1b[43m',
      blueBg: '\x1b[44m',
      cyanBg: '\x1b[46m',
      whiteBg: '\x1b[47m',
      magentaBg: '\x1b[45m',
    }

    let code = colorCodes[color + 'Bg'];

    if (!code) {
      throw new Error("Invalid background color");
    }

    Screen.backgroundColors[row][col] = code;
  }

  static setMessage(msg) {
    Screen.message = msg;
  }

}

module.exports = Screen;
