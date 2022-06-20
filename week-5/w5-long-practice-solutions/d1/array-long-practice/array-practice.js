const findMinimum = (arr) => {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
  }

  return min;
};

const runningSum = (arr) => {
  let sum = 0;
  let ret = [];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    ret.push(sum);
  }

  return ret;
};

const evenNumOfChars = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) count++;
  }

  return count;
};

const smallerThanCurr = (arr) => {
  const ret = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;

      if (arr[i] > arr[j]) count++;
    }

    ret.push(count);
  }

  return ret;
};

const twoSum = (arr, target) => {
  // Note: This is not the most efficient implementation!
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;

      if (arr[i] + arr[j] === target) return true;
    }
  }

  return false;
};

const secondLargest = (arr) => {
  if (arr.length < 2) return undefined;

  let largest = Math.max(arr[0], arr[1]);
  let secondLargest = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    let val = arr[i];

    if (val > largest) {
      secondLargest = largest;
      largest = val;
    } else if (val > secondLargest) {
      secondLargest = val;
    }
  }

  return secondLargest;
};

const shuffle = (arr) => {
  const copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    let randomIndex = Math.floor(Math.random() * copy.length);
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
