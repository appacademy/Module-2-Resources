const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {

    const array = []

    for (let i = 1; i <= 100; i++) {
      const start = Date.now()
      array.push(addNums(i * increment))
      const end = Date.now()
      console.log(end - start)
    }

    return array
  }


  // Runs `addManyNums` in 10 increasing increments
  function addManyNums10Timing(increment) {

    const array = []

    for (let i = 1; i <= 100; i++) {
        const start = Date.now()
        array.push(addManyNums(i * increment))
        const end = Date.now()
        console.log(end - start)

    }

    return array
}

n = 1000000
console.log(`addNums(${n}): `);
// console.time("addNums10")
addNums10Timing(n);
// console.timeEnd("addNums10")

console.log("\n***********\n");

n = 5000
console.log(`addManyNums(${n}): `);
// console.time("addManyNums10")
addManyNums10Timing(n);
// console.timeEnd("addManyNums10")
