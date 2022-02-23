function ageSort(users) {
  return users.sort((a, b) => {
    return a.age - b.age;
  });
}

function oddEvenSort(arr) {

  return arr.sort((a, b) => {
    if ((a + b) % 2 === 0) return a - b;
    else if (a % 2 === 0) return 1;
    return -1;
  });
}

function validAnagrams(s, t) {

  return s.split("").sort().join("") == t.split("").sort().join("");
}

function reverseBaseSort(arr) {

  return arr.sort((a, b) => {
    let baseA = Math.floor(Math.log10(a));
    let baseB = Math.floor(Math.log10(b));
    if (baseA === baseB) return a - b;
    else return baseB - baseA;
  });
}

function frequencySort(arr) {

  const count = {};
  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) count[arr[i]] = 0;
    count[arr[i]]++;
  }
  return arr.sort((a, b) => {
    if (count[a] === count[b]) return b - a;
    else if (count[a] > count[b]) return 1;
    else return -1;
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
