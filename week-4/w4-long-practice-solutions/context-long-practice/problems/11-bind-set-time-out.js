function boundFuncTimer(obj, func, delay) {
  //!!START
  setTimeout(func.bind(obj), delay);
  //!!END
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
