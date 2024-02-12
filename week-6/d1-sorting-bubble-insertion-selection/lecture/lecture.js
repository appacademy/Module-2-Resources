



// Swapping
let arr = [1,2,3,4,5];

// swap two values
let temp = arr[1];
arr[1] = arr[2];
arr[2] = temp;

// console.log(arr);// [ 1, 3, 2, 4, 5 ]

arr = [1,2,3,4,5];

// ES6
[arr[1], arr[2]] = [arr[2], arr[1]];

// console.log(arr);// [ 1, 3, 2, 4, 5 ]


// Shifting
arr = [1,2,3,4,5];


for(let i = 1; i < arr.length; i++) {
  // [1,2,3,4,5]
  // [1,1,1,1,1];
  arr[i] = arr[i - 1];
}

// console.log(arr);


arr = [1,2,3,4,5];

for(let i = arr.length - 1; i >= 0; i--) {
  // [1,2,3,4,5]
  // [1,1,2,3,4]
  arr[i] = arr[i - 1];
  console.log(arr);
}

// arr[0] = 0
// console.log(arr);
