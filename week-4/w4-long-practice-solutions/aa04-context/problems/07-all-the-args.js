function allTheArgs(func, ...args) {
  // Your code here
  return func.bind({}, ...args);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
