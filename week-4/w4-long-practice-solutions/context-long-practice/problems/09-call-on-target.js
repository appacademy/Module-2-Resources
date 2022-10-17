function callOnTarget(func, obj1, obj2) {
  //!!START
  let boundFunc = func.bind(obj1);
  return boundFunc(obj2);
  // other options:
  // return func.call(obj1, obj2);
  // return func.apply(obj1, [obj2]);
  //!!END
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
