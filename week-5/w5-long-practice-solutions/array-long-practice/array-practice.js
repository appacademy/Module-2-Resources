const findMinimum = arr => {

  //!!START
  let min = arr[0];

  for (let i = 1 ; i < arr.length ; i++) {
    min = Math.min(min, arr[i]);
  }

  return min;
  //!!END

};

const runningSum = arr => {

  //!!START
  let sum = 0;
  let ret = [];

  for (let i = 0 ; i < arr.length ; i++) {
    sum += arr[i];
    ret.push(sum);
  }

  return ret;
  //!!END
};

const evenNumOfChars = arr => {

  //!!START
  let count = 0;

  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i].length % 2 === 0) count++;
  }

  return count;
  //!!END
};

const smallerThanCurr = arr => {

  //!!START
  const ret = [];

  for (let i = 0 ; i < arr.length ; i++) {

    let count = 0;
    for (let j = 0 ; j < arr.length ; j++) {

      if (i === j) continue;

      if (arr[i] > arr[j]) count++;
    }

    ret.push(count);
  }

  return ret;
  //!!END

};

const twoSum = (arr, target) => {

  //!!START
  // Note: This is not the most efficient implementation!
  for (let i = 0 ; i < arr.length ; i++) {
    for (let j = 0 ; j < arr.length ; j++) {

      if (i === j) continue;

      if (arr[i] + arr[j] === target) return true;
    }
  }

  return false;
  //!!END
};

const secondLargest = arr => {

  //!!START
  if (arr.length < 2) return undefined;

  let largest = Math.max(arr[0], arr[1]);
  let secondLargest = Math.min(arr[0], arr[1]);

  for (let i = 2 ; i < arr.length ; i++) {
    let val = arr[i];

    if (val > largest) {
      secondLargest = largest;
      largest = val;
    } else if (val > secondLargest) {
      secondLargest = val;
    }

  }

  return secondLargest;
  //!!END
};

const shuffle = (arr) => {

  //!!START
  const copy = [...arr];

  for (let i = 0 ; i < copy.length ; i++) {
    let randomIndex = Math.floor(Math.random() * copy.length);
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
  //!!END
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
