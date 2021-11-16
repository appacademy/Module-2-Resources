function randomNumberArr(max) {
    const res = new Array();
  
    for (let i = 0; i < max; i++) {
      const randomNumber = Math.floor(Math.random() * Math.floor(max));
  
      res.push(randomNumber);
    }
  
    return res;
}

const arr10 = randomNumberArr(10);
const arr100 = randomNumberArr(100);
const arr1000 = randomNumberArr(1000);
const arr10000 = randomNumberArr(10000);
const arr100000 = randomNumberArr(100000);
const arr1000000 = randomNumberArr(1000000);

let n = 100000;

// console.time(`randomNumberArr(${10})`);
// randomNumberArr(10);
// console.timeEnd(`randomNumberArr(${10})`);

// console.time(`randomNumberArr(${100000})`);
// randomNumberArr(100000);
// console.timeEnd(`randomNumberArr(${100000})`);

// console.time(`randomNumberArr(${1000000})`);
// randomNumberArr(1000000);
// console.timeEnd(`randomNumberArr(${1000000})`);

function pushTest(n) {
    const arr = [];
  
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
  
    return arr;
};

// console.time(`pushTest(${n}): `);
// pushTest(n);
// console.timeEnd(`pushTest(${n}): `);

// console.time(`randomNumberArr(${100000})`);
// randomNumberArr(100000);
// console.timeEnd(`randomNumberArr(${100000})`);





function popTest(arr) {
    const n = arr.length;
  
    for (let i = 0 ; i < n ; i++) {
      arr.pop();
    }
      
    return arr;
}

// console.time(`popTest(arr10)`);
// popTest(arr10);
// console.timeEnd(`popTest(arr10)`);

// console.time(`popTest(arr100)`);
// popTest(arr100);
// console.timeEnd(`popTest(arr100)`);

// console.time(`popTest(arr100000)`);
// popTest(arr100000);
// console.timeEnd(`popTest(arr100000)`);




function shiftTest(arr) {
    const n = arr.length;
  
    for (let i = 0 ; i < n ; i++) {
      arr.shift();
    }
      
    return arr;
}

// console.time(`shiftTest(arr100000)`);
// shiftTest(arr100000);
// console.timeEnd(`shiftTest(arr100000)`);

// console.time(`popTest(arr100000)`);
// popTest(arr100000);
// console.timeEnd(`popTest(arr100000)`);




function unShiftTest(n) {
    const arr = [];
  
    for (let i = 0; i < n; i++) {
      arr.unshift(i);
    }
  
    return arr;
};

// console.time(`unShiftTest(${n}): `);
// unShiftTest(n);
// console.timeEnd(`unShiftTest(${n}): `);

// console.time(`pushTest(${n}): `);
// pushTest(n);
// console.timeEnd(`pushTest(${n}): `);




// function mapTest(arr) {
//     return arr.map(el => el * 2)
// }

// console.time(`mapTest(arr10)`);
// mapTest(arr10);
// console.timeEnd(`mapTest(arr10)`);

// console.time(`mapTest(arr100000)`);
// mapTest(arr1000000);
// console.timeEnd(`mapTest(arr100000)`);



// function filterTest(arr){
//     return arr.filter(el => el%2 === 0);
// }

// console.time(`filterTest(arr10)`);
// filterTest(arr10);
// console.timeEnd(`filterTest(arr10)`);

// console.time(`filterTest(arr100000)`);
// filterTest(arr100000);
// console.timeEnd(`filterTest(arr100000)`);




// function reduceTest(arr){
//     return arr.reduce((acc, el) => acc + el);
// }

// console.time(`reduceTest(arr10)`);
// reduceTest(arr10);
// console.timeEnd(`reduceTest(arr10)`);

// console.time(`reduceTest(arr100000)`);
// reduceTest(arr100000);
// console.timeEnd(`reduceTest(arr100000)`);




// function reverseTest(arr){
//     return arr.reverse();
// }

// console.time(`reverseTest(arr10)`);
// reverseTest(arr10);
// console.timeEnd(`reverseTest(arr10)`);

// console.time(`reverseTest(arr1000000)`);
// reverseTest(arr1000000);
// console.timeEnd(`reverseTest(arr1000000)`);





function copyTest(arr){
    const newArr = [...arr];
    return newArr;
}

console.time(`copyTest(arr10)`);
copyTest(arr10);
console.timeEnd(`copyTest(arr10)`);

console.time(`copyTest(arr1000000)`);
copyTest(arr1000000);
console.timeEnd(`copyTest(arr1000000)`);