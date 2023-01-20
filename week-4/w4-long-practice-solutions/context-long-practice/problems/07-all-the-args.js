function allTheArgs(func, ...args) {
  //!!START
  return func.bind(null, ...args);
  //!!END
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
