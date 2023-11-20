const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10Timing(increment) {
    // Fill this in

    const arr = []

    for (let i = 1; i <= 100; i++) {
      const start = Date.now()
      arr.push(addNums(i * increment))
      const end = Date.now()

      console.log(end - start)
    }

    return arr
  }
  // Time O(1 + (10 * n) + 1) => O(1 + n + 1)
  // => O(n)
  // Space O(1), making a new array but it will always contain 10 items


  // Runs `addManyNums` in 10 increasing increments
  function addManyNums10Timing(increment) {
    // Fill this in
    const arr = []

    for (let i = 1; i <= 100; i++) {
        const start = Date.now()
        //       O(n^2)
        arr.push(addManyNums(i * increment))
        const end = Date.now()

        console.log(end - start)
    }

    return arr
  }


n = 1000000
console.log(`addNums(${n}): `);
console.time("addNums10")
addNums10Timing(1000000);
console.timeEnd("addNums10")

console.log("\n***********\n");

n = 5000
console.log(`addManyNums(${n}): `);
console.time("addManyNums10")
addManyNums10Timing(5000);
console.timeEnd("addManyNums10")
