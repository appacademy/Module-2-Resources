function changeContext(func, obj) {
  //!!START
  let boundFunc = func.bind(obj);
  return boundFunc();
  // other options:
  // return func.apply(obj);
  // return func.apply(obj);
  //!!END
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
