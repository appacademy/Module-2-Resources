function ageSort(users) {
  // Your code here
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return 1;
    } else if (a % 2 !== 0 && b % 2 === 0) {
      return -1;
    } else {
      return a - b;
    }
  });
}

function validAnagrams(s, t) {
  // Your code here
  return s.split("").sort().join("") === t.split("").sort().join("");
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (Math.floor(Math.log10(a)) > Math.floor(Math.log10(b))) {
      return -1;
    } else if (Math.floor(Math.log10(a)) < Math.floor(Math.log10(b))) {
      return 1;
    } else {
      return a - b;
    }
  });
}

function frequencySort(arr) {
  // Your code here
  const counterObj = {};

  for (let el of arr) {
    if (!counterObj[el]) {
      counterObj[el] = 1;
    } else {
      counterObj[el]++;
    }
  }

  return arr.sort((a, b) => {
    if (counterObj[a] > counterObj[b]) {
      return 1;
    } else if (counterObj[a] < counterObj[b]) {
      return -1;
    } else {
      return b - a;
    }
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
