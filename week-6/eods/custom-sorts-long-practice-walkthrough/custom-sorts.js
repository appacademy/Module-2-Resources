// t: O(n log n), s: O(1)
function ageSort(users) {
  return users.sort((a, b) => {
    return a.age - b.age; // O(1)
  });
}

// t: O(n log n), s: O(1)
function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    //  a    b
    // even odd
    // odd even
    // o    o
    // e    e

    // if (a % 2 === 0 && b % 2 === 0) {
    //   return a - b;
    // } else if (a % 2 === 1 && b % 2 === 1) {
    //   return a - b;

    if ((a + b) % 2 === 0) {
      return a - b;
    } else if (a % 2 === 0) {
      return 1;
    } else {
      return -1;
    }
  });
}

// t: O(s log s + t log t) => O(2 n log n ) => O(n log n)
// t: O(max(s log s, t log t)), s: O(s + t) => O(n)
function validAnagrams(s, t) {
  // if s has the same letters as t, they are anagrams
  // if s sorted and t sorted are the same words,
  // they are anagrams

  // s Big O analysis
  // s (split)
  // s log s (sort)
  // s (join)
  // s log s + s + s
  // s log s + 2s
  // s log s

  // t log t

  const sSorted = s.split('').sort().join('');
  const tSorted = t.split('').sort().join('');
  console.log(sSorted, tSorted);

  return sSorted === tSorted;
}

// t: O(s + t) => O(n), s: O(s)
function validAnagrams(s, t) {
  // if s has the same letters as t, they are anagrams
  // if the number of instances of characters in s is the same
  // as t, they are anagrams
  // s=car t=race false

  if (s.length !== t.length) return false;

  const sCounter = {}; // s space complexity worse case

  // loop over s only
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];

    if (sChar in sCounter) {
      sCounter[sChar]++;
    } else {
      sCounter[sChar] = 1;
    }
  }

  console.log(sCounter);

  // loop over t only
  // O(1) work to access sCounter
  for (const tChar of t) {
    if (!sCounter[tChar]) {
      return false;
    } else {
      sCounter[tChar]--;
    }
  }

  return true;
}

// t: O(n log n) s: O(1)
function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    const aBase = Math.floor(Math.log10(a));
    const bBase = Math.floor(Math.log10(b));

    if (aBase === bBase) {
      return a - b;
    } else if (aBase > bBase) {
      return -1;
    } else {
      return 1;
    }
  });
}

// t: O(n log n) s: O(n)
function frequencySort(arr) {
  const frequency = {}; // O(n) space

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];

    if (ele in frequency) {
      frequency[ele]++;
    } else {
      frequency[ele] = 1;
    }
  }

  return arr.sort((a, b) => {
    // a    b
    // a  > b  frequency
    // a  < b  frequency
    // a == b  frequency

    if (frequency[a] === frequency[b]) {
      return b - a;
    } else {
      return frequency[a] - frequency[b];
    }
    // } else if (frequency[a] > frequency[b]) {
    //   return 1;
    // } else {
    //   return -1;
    // }
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
