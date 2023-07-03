function ageSort(users) {
  //!!START
  return users.sort((a, b) => {
    return a.age - b.age;
  });
  //!!END
}

function oddEvenSort(arr) {
  //!!START

  return arr.sort((a, b) => {
    if ((a + b) % 2 === 0) return a - b;
    else if (a % 2 === 0) return 1;
    return -1;
  });
  //!!END
}

function validAnagrams(s, t) {
  //!!START

  return s.split("").sort().join("") == t.split("").sort().join("");
  //!!END
}

function reverseBaseSort(arr) {
  //!!START

  return arr.sort((a, b) => {
    let baseA = Math.floor(Math.log10(a));
    let baseB = Math.floor(Math.log10(b));
    if (baseA === baseB) return a - b;
    else return baseB - baseA;
  });
  //!!END
}

function frequencySort(arr) {
  //!!START

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
  //!!END
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
