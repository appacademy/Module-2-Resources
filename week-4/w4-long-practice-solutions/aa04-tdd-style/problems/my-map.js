function myMap(inputArray, callback) {
  const arr = [];

  for (let el of inputArray) {
    arr.push(callback(el));
  }

  return arr;
}

module.exports = myMap;
