//O(n^2) quadratic time
//O(n) linear space
function myMin1a(list) {
  let minNum = null;

  for (let num1 of list) {
    dupList = list.slice();
    dupList = dupList.filter((item) => item !== num1);
    if (dupList.every((item) => item > num1)) {
      minNum = num1;
    }
  }

  return minNum;
}

//O(n^2) quadratic time
//O(1) constant space
function myMin1b(list) {
  for (let i = 0; i < list.length; i++) {
    let num1 = list[i];
    let min = true;
    for (let j = 0; j < list.length; j++) {
      let num2 = list[j];
      if (i === j) continue;
      if (num2 < num1) min = false;
    }
    if (min) return num1;
  }
}

//O(n) linear time
//O(1) constant space
function myMin2(list) {
  let minNum = list[0];

  list.forEach(function (num) {
    if (num < minNum) minNum = num;
  });

  return minNum;
}

//O(n^3) cubic time
//O(n^3) cubic space
function largestContiguousSubsum1(array) {
  let subArrays = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      subArrays.push(array.slice(i, j + 1));
    }
  }

  let sumOfArrays = [];
  for (let elt of subArrays) {
    sumOfArrays.push(elt.reduce((a, b) => a + b));
  }
  return Math.max(...sumOfArrays);
}

//O(n) linear time
//O(1) constant space
function largestContiguousSubsum2(array) {
  let largest = array[0];
  let current = array[0];

  for (let i = 1; i < array.length; i++) {
    if (current < 0) current = 0;
    current += array[i];
    if (current > largest) largest = current;
  }

  return largest;
}
