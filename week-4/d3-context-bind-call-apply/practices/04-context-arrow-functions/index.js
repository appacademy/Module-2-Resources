const User = require('./classes/user');

const michelle = new User('Michelle');

function greetAfterNameChange(changeName, newName) {
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
}

greetAfterNameChange(michelle.changeName, 'Elle');
// const shane = new User('shane');
// console.log(michelle);
// console.log(shane);
// should print out: Hi my name is Elle
