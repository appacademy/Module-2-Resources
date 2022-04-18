function anagrams(str1, str2) {
  let obj = {};

  for (let char of str1) {
    if (obj[char]) obj[char]++;
    else obj[char] = 1;
  }

  for (let char of str2) {
    if (obj[char]) obj[char]--;
    else obj[char] = 1;
  }
  
  for (let key in obj) {
    if (obj[key] !== 0) return false;
  }

  return true;

}


function commonElements(arr1, arr2) {
  // fun with objects
  let obj = {};
  let arr = [];

  for (let el of arr1) {
    if (obj[el]) obj[el]++;
    else obj[el] = 1;
  }

  for (let el of arr2) {
    if (obj[el]) obj[el]++;
    else obj[el] = 1;
  }

  for (let key in obj) {
    if (obj[key] > 1) arr.push(Number(key)); // keys are strings, test is looking for integer
  }

  return arr;

  // fun with sets

  // const set = new Set(arr1);
  // return arr2.filter(el => set.has(el));

  // const set = new Set([...arr1, ...arr2]);
  // return [...set];

  // const set = new Set(arr1);
  // for (let el of arr2) {
  //   set.add(el);
  // }
  // return Array.from(set)

  // return [...new Set(arr1.concat(arr2))];
}


function duplicate(arr) {
  let obj = {};

  for (let el  of arr) {
    if (obj[el]) obj[el]++;
    else obj[el] = 1;
  }

  for (let key in obj) {
    if (obj[key] > 1) return Number(key); 
  }
}


function twoSum(nums, target) {
  // const obj = {};

  // for (let num of nums) {
  //   let compliment = target - num;

  //   if (obj[compliment]) {
  //     return true;
  //   } else {
  //     obj[num] = compliment;
  //   }
  // }
  // return false;

  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(target - nums[i])) return true;
    else numSet.add(nums[i]);
  }

  return false;
  
}


function wordPattern(pattern, strings) {
  const matches = {};
  const wordSet = new Set();

  for (let i = 0; i < pattern.length; i++) {
    let letter = pattern[i];
    if (matches[letter]) {
      if (matches[letter] !== strings[i]) return false;
    } else {
      let word = strings[i];
      if (wordSet.has(word)) return false;
      wordSet.add(word);
      matches[letter] = word;
    }
  }

  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
