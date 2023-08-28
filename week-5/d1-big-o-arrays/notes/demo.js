let arr = [];

for (let i = 0; i < 10000; i++) {
  arr.push(i);
}


function one(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    const start = Date.now();
    sum += i
    const end = Date.now();
    console.log(end - start)
  }
}

function two(arr) {
  let arr1 = []
  for (let i = 0; i < arr.length; i++) {
    const start = Date.now();
    for (let j = 1; j < arr.length; j++) {
      arr1.push([i, j]);
    }
    const end = Date.now();
    console.log(end - start)
  }
}

function three(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  console.log(arr)
  arr.forEach((ele) => {
    ele *= 2;
  });
  console.log(arr)
}

console.time('one: ')
one(arr)
console.timeEnd('one: ')
console.time('two: ')
two(arr)
console.timeEnd('two: ')
// three(arr)
