function anagrams(str1, str2) {
  // Your code here
  if (str1.length !== str2.length) return false;

  const counts = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (counts[letter]) {
      counts[letter]++;
    } else {
      counts[letter] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (counts[letter]) {
      counts[letter]--;
    } else {
      return false;
    }
  }

  return true;
}

function commonElements(arr1, arr2) {
  // Your code here
  const set1 = new Set(arr1);

  return arr2.filter((x) => set1.has(x));
}

function duplicate(arr) {
  // Your code here
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return arr[i];
    set.add(arr[i]);
  }
}

function twoSum(nums, target) {
  // Your code here
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(target - nums[i])) return true;
    else numSet.add(nums[i]);
  }

  return false;
}

function wordPattern(pattern, strings) {
  // Your code here
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
