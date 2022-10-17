const { expect } = require("chai");

const [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
  snakeSort,
] = require("../custom-sorts.js");

describe("Custom Sorting Algorithms", function () {
  it("ageSort sorts users by age", function () {
    const users = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 30,
        occupation: "Software Engineer",
        friends: [2, 3, 4],
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        age: 25,
        occupation: "Data Scientist",
        friends: [1, 4],
      },
      {
        id: 3,
        firstName: "Mary",
        lastName: "Smith",
        age: 32,
        occupation: "UX Designer",
        friends: [2, 4],
      },
      {
        id: 4,
        firstName: "James",
        lastName: "Johnson",
        age: 55,
        occupation: "CTO",
        friends: [1, 2, 3],
      },
    ];

    const sortedNames = ageSort(users).map((u) => u.firstName);
    expect(sortedNames).to.deep.equal(["Jane", "John", "Mary", "James"]);
  });

  it("oddEvenSort sorts odds before evens", function () {
    const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
    const arr2 = [5, 8, 13, 6, 22, 14, 9];

    expect(oddEvenSort(arr1)).to.deep.equal([1, 3, 5, 7, 9, 2, 4, 6, 8]);
    expect(oddEvenSort(arr2)).to.deep.equal([5, 9, 13, 6, 8, 14, 22]);
  });

  it("validAnagrams checks if two strings are anagrams of each other", function () {
    let s = "anagram";
    let t = "nagaram";

    expect(validAnagrams(s, t)).to.be.true;
  });

  it("reverseBaseSort sorts numbers by reverse base", function () {
    const arr1 = [11, 1, 101, 10, 100];
    const arr2 = [1, 45, 164, 6, 31, 90, 671];

    expect(reverseBaseSort(arr1)).to.deep.equal([100, 101, 10, 11, 1]);
    expect(reverseBaseSort(arr2)).to.deep.equal([164, 671, 31, 45, 90, 1, 6]);
  });

  it("frequencySort sorts numbers by the amount of times they occur in the array", function () {
    const arr1 = [1, 1, 2, 2, 2, 3];
    const arr2 = [2, 3, 1, 3, 2];
    const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1];

    expect(frequencySort(arr1)).to.deep.equal([3, 1, 1, 2, 2, 2]);
    expect(frequencySort(arr2)).to.deep.equal([1, 3, 3, 2, 2]);
    expect(frequencySort(arr3)).to.deep.equal([5, -1, 4, 4, -6, -6, 1, 1, 1]);
  });
});
