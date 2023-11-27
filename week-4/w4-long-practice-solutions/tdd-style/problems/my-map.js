function myMap(inputArray, callback) {
  //!!START
  const outputArray = [];
  for (let index = 0; index < inputArray.length; index++) {
    outputArray.push(callback(inputArray[index], index, inputArray));
  }
  return outputArray;
  //!!END
}

module.exports = myMap;
