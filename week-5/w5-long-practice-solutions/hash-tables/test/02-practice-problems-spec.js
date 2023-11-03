const { expect } = require('chai');

const [anagrams, commonElements, duplicate, twoSum, wordPattern] = require("../phases/02-practice-problems");

describe ('Phase 2 - Hash table practice problems', function () {

  it('`anagrams` tests if two strings are anagrams of each other', function () {

    expect(anagrams('elvis', 'lives')).to.be.true;
    expect(anagrams('coding', 'shmoding')).to.be.false;
    expect(anagrams('pear', 'bear')).to.be.false;
  });

  it('`anagrams` runs in O(n) time', function () {

    expect(anagrams('elvis', 'lives')).to.be.true;

    arr = new Array(1000000).fill("a");

    const str1 = arr.join("");
    const str2 = arr.join("");

    expect(anagrams(str1, str2)).to.be.true;

    arr[500000] = "b";
    const str3 = arr.join("");

    expect(anagrams(str1, str3)).to.be.false;

  });

  it('`commonElements` returns the common integers in both arrays', function () {


    expect(commonElements([1,2,3], [3,4,5])).to.include.members([3]);
    expect(commonElements([2,4,6], [5,4,3,2,1])).to.include.members([2, 4]);

  });

  it('`commonElements` runs in O(n) time', function () {


    expect(commonElements([1,2,3], [3,4,5])).to.include.members([3]);
    expect(commonElements([2,4,6], [5,4,3,2,1])).to.include.members([2, 4]);

    target = 1000000;

    arr1 = [];
    arr2 = [];

    for (let i = 0 ; i < target ; i++) {
      arr1.push(i);
      arr2.push(i % 5);
    }

    common = commonElements(arr1, arr2);

    expect(common).to.include.members([0, 1, 2, 3, 4]);

  });

  it('`duplicates` returns the duplicated value in an array', function () {

    expect(duplicate([2,2,1])).to.equal(2);
    expect(duplicate([7,2,4,9,5,4,8])).to.equal(4);

  });

  it('`duplicates` runs in O(n) time', function () {

    expect(duplicate([2,2,1])).to.equal(2);


    target = 1000000;

    arr = [];

    for (let i = 0 ; i < target ; i++) {
      arr.push(i);
    }

    arr.push(123456);

    expect(duplicate(arr)).to.equal(123456);
  });

  it('`twoSum` returns true if two values add up to the target', function () {

    expect(twoSum([2, 7, 11, 15], 22)).to.be.true;
    expect(twoSum([3, 4, 5], 6)).to.be.false;

  });

  it('`twoSum` runs in O(n) time', function () {

    expect(twoSum([2, 7, 11, 15], 22)).to.be.true;
    expect(twoSum([3, 4, 5], 6)).to.be.false;


    target = 1000000;

    arr = [];

    for (let i = 0 ; i < target ; i++) {
      arr.push(i);
    }

    expect(twoSum(arr, 1999997)).to.equal(true);
    expect(twoSum(arr, 1999998)).to.equal(false);
  });

  it('`wordPattern` returns true if words follow the pattern', function () {

    expect(wordPattern("ABBA", ['dog', 'cat', 'cat', 'dog'])).to.be.true;
    expect(wordPattern("ABBA", ['dog', 'dog', 'dog', 'dog'])).to.be.false;
    expect(wordPattern("AAAA", ['dog', 'dog', 'dog', 'dog'])).to.be.true;
    expect(wordPattern("ABCD", ['dog', 'cat', 'dog', 'cat'])).to.be.false;

  });

  it('`wordPattern` runs in O(n) time', function () {

    expect(wordPattern("ABBA", ['dog', 'cat', 'cat', 'dog'])).to.be.true;
    expect(wordPattern("ABBA", ['dog', 'dog', 'dog', 'dog'])).to.be.false;

    target = 1000000;

    patternArr = [];
    strings = [];

    for (let i = 0 ; i < target ; i++) {
      patternArr.push("ABCD");
      strings.push('Apple');
      strings.push('Berry');
      strings.push('Cantaloupe');
      strings.push('Date');
    }

    expect(wordPattern(patternArr.join(""), strings)).to.be.true;

    strings[target-1] = 'Elderberry';

    expect(wordPattern(patternArr.join(""), strings)).to.be.false;

  });

});
