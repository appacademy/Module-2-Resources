function anagrams(str1, str2) {
  //!!START
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
  //!!END
}


function commonElements(arr1, arr2) {
  //!!START
  const set1 = new Set(arr1);

  return arr2.filter(x => set1.has(x));
  //!!END
}


function duplicate(arr) {
  //!!START
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return arr[i];
    set.add(arr[i]);
  }
  //!!END
}


function twoSum(nums, target) {
  //!!START
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(target - nums[i])) return true;
    else numSet.add(nums[i]);
  }

  return false;
  //!!END
}


function wordPattern(pattern, strings) {
  //!!START
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
  //!!END
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
