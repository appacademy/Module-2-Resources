function ageSort(users) {
  return users.sort((a, b) => {
    return a.age - b.age;
  });
}

function oddEvenSort(arr) {
  /*
    4 SITUATIONS TO TAKE CARE OF:
      A even, B even
      A odd, B odd
      A even, B odd
      A odd, B even
  */
 
  return arr.sort((a, b) => {
    if ((a % 2 == 0 && b % 2 == 0) || (a % 2 == 1 && b % 2 == 1)) {
      // if both a and b are simultaneously even or odd, sort them normally
      return a - b;
    } else if (a % 2 == 0) {
      // if passes first 'if' and a is the even one, nudge it to the right
      return 1
    } else if (b % 2 == 0) {
      // if passes first 'if' and b is the even one, keep it there
      return -1
    }
    
  });
}

function validAnagrams(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    const powerA = Math.floor(Math.log10(a));
    const powerB = Math.floor(Math.log10(b));
    
    if (powerA === powerB) return a - b;
    else return powerB - powerA;
  });
}

function frequencySort(arr) {
  // Your code here
  /*
    [2, 3, 1, 3, 2];
                 i
    { 
      2: 2, 
      3: 2, 
      1: 1 
    }
  
    have to know the freq of an ele once .sort comes across it
    decreasing -> b - a
    increasing -> a - b
    
    PLAN:
    need to iterate at least once to calc the freq of each element
    create a count map of the ele's
    { ele: freq }
    
    if a and b have the same freq -> sort those numbers in decreasing order
    otherwise, sort in increasing order based on the frequencies
  */
 
  const counts = {};
  for (const num of arr) {
    if (num in counts) counts[num]++;
    else counts[num] = 1;
  }
  
  return arr.sort((a, b) => {
    if (counts[a] === counts[b]) return b - a;
    else return counts[a] - counts[b];
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
