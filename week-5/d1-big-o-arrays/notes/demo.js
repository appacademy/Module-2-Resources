function one(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function two(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      console.log([i, j]);
    }
  }
}

function three(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  arr.forEach((ele) => {
    ele *= 2;
  });
}
