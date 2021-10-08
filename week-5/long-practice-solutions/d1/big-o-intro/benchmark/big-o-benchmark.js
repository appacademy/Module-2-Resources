// run `node benchmark/big-o-benchmark.js` to see timing benchmark outputs


// helper function
const randomNumberArr = (max) => {
    const res = new Array();

    for (let i = 0; i < max; i++) {
        const randomNumber = Math.floor(Math.random() * Math.floor(max));

        res.push(randomNumber);
    }

    return res;
};


/****************************** Testing push ******************************/
const jsPush = (arr) => {
    const res = new Array();
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        res.push(arr[i]);
    }

    return res;
};

// Write tests here
console.log('Tests for array.push...');
let randomArr = randomNumberArr(1000);
console.time('n =   1,000');
jsPush(randomArr);
console.timeEnd('n =   1,000');

randomArr = randomNumberArr(10000);
console.time('n =  10,000');
jsPush(randomArr);
console.timeEnd('n =  10,000');

randomArr = randomNumberArr(20000);
console.time('n =  20,000');
jsPush(randomArr);
console.timeEnd('n =  20,000');

randomArr = randomNumberArr(40000);
console.time('n =  40,000');
jsPush(randomArr);
console.timeEnd('n =  40,000');

randomArr = randomNumberArr(50000);
console.time('n =  50,000');
jsPush(randomArr);
console.timeEnd('n =  50,000');

randomArr = randomNumberArr(60000);
console.time('n =  60,000');
jsPush(randomArr);
console.timeEnd('n =  60,000');

randomArr = randomNumberArr(80000);
console.time('n =  80,000');
jsPush(randomArr);
console.timeEnd('n =  80,000');

randomArr = randomNumberArr(100000);
console.time('n = 100,000');
jsPush(randomArr);
console.timeEnd('n = 100,000');

// Write conclusion for time complexity here
/*********************************** O(1) ***********************************/ 
console.log('Time complexity: O(1)');
console.log('\n');

/****************************** Testing pop ******************************/
const jsPop = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        arr.pop();
    }
    
    return arr;
};

// Write tests here
console.log('Tests for array.pop...');
randomArr = randomNumberArr(1000);
console.time('n =   1,000');
jsPop(randomArr);
console.timeEnd('n =   1,000');

randomArr = randomNumberArr(10000);
console.time('n =  10,000');
jsPop(randomArr);
console.timeEnd('n =  10,000');

randomArr = randomNumberArr(20000);
console.time('n =  20,000');
jsPop(randomArr);
console.timeEnd('n =  20,000');

randomArr = randomNumberArr(40000);
console.time('n =  40,000');
jsPop(randomArr);
console.timeEnd('n =  40,000');

randomArr = randomNumberArr(50000);
console.time('n =  50,000');
jsPop(randomArr);
console.timeEnd('n =  50,000');

randomArr = randomNumberArr(60000);
console.time('n =  60,000');
jsPop(randomArr);
console.timeEnd('n =  60,000');

randomArr = randomNumberArr(80000);
console.time('n =  80,000');
jsPop(randomArr);
console.timeEnd('n =  80,000');

randomArr = randomNumberArr(100000);
console.time('n = 100,000');
jsPop(randomArr);
console.timeEnd('n = 100,000');

// Write conclusion for time complexity here
/*********************************** O(1) ***********************************/ 
console.log('Time complexity: O(1)');
console.log('\n');


/**************************** Testing enumerables ****************************/
// Write testing functions here for map, filter, reduce, every, and other
// enumerables for Array's.
// Remember to write a hypothesis for the time complexity for each enumerable
// that you test. After testing, record your conclusions for time complexities.
const jsMap = (arr) => {
    const n = arr.length;

    return arr.map(() => 0);
};

const jsFilter = (arr) => {
    const n = arr.length;

    return arr.filter(() => true);
};

const jsReduce = (arr) => {
    const n = arr.length;

    return arr.reduce((_acc, _ele) => 0, 0);
};

const jsEvery = (arr) => {
    const n = arr.length;

    return arr.every(() => true);
};

// Write tests here
console.log('Tests for array.map...');
randomArr = randomNumberArr(1000);
console.time('n =   1,000');
jsMap(randomArr);
console.timeEnd('n =   1,000');

randomArr = randomNumberArr(10000);
console.time('n =  10,000');
jsMap(randomArr);
console.timeEnd('n =  10,000');

randomArr = randomNumberArr(20000);
console.time('n =  20,000');
jsMap(randomArr);
console.timeEnd('n =  20,000');

randomArr = randomNumberArr(40000);
console.time('n =  40,000');
jsMap(randomArr);
console.timeEnd('n =  40,000');

randomArr = randomNumberArr(50000);
console.time('n =  50,000');
jsMap(randomArr);
console.timeEnd('n =  50,000');

randomArr = randomNumberArr(60000);
console.time('n =  60,000');
jsMap(randomArr);
console.timeEnd('n =  60,000');

randomArr = randomNumberArr(80000);
console.time('n =  80,000');
jsMap(randomArr);
console.timeEnd('n =  80,000');

randomArr = randomNumberArr(100000);
console.time('n = 100,000');
jsMap(randomArr);
console.timeEnd('n = 100,000');

console.log('\n');


/******************************************************************************/

console.log('Tests for array.filter...');
randomArr = randomNumberArr(1000);
console.time('n =   1,000');
jsFilter(randomArr);
console.timeEnd('n =   1,000');

randomArr = randomNumberArr(10000);
console.time('n =  10,000');
jsFilter(randomArr);
console.timeEnd('n =  10,000');

randomArr = randomNumberArr(20000);
console.time('n =  20,000');
jsFilter(randomArr);
console.timeEnd('n =  20,000');

randomArr = randomNumberArr(40000);
console.time('n =  40,000');
jsFilter(randomArr);
console.timeEnd('n =  40,000');

randomArr = randomNumberArr(50000);
console.time('n =  50,000');
jsFilter(randomArr);
console.timeEnd('n =  50,000');

randomArr = randomNumberArr(60000);
console.time('n =  60,000');
jsFilter(randomArr);
console.timeEnd('n =  60,000');

randomArr = randomNumberArr(80000);
console.time('n =  80,000');
jsFilter(randomArr);
console.timeEnd('n =  80,000');

randomArr = randomNumberArr(100000);
console.time('n = 100,000');
jsFilter(randomArr);
console.timeEnd('n = 100,000');

console.log('\n');

/******************************************************************************/

console.log('Tests for array.reduce...');
randomArr = randomNumberArr(1000);
console.time('n =   1,000');
jsReduce(randomArr);
console.timeEnd('n =   1,000');

randomArr = randomNumberArr(10000);
console.time('n =  10,000');
jsReduce(randomArr);
console.timeEnd('n =  10,000');

randomArr = randomNumberArr(20000);
console.time('n =  20,000');
jsReduce(randomArr);
console.timeEnd('n =  20,000');

randomArr = randomNumberArr(40000);
console.time('n =  40,000');
jsReduce(randomArr);
console.timeEnd('n =  40,000');

randomArr = randomNumberArr(50000);
console.time('n =  50,000');
jsReduce(randomArr);
console.timeEnd('n =  50,000');

randomArr = randomNumberArr(60000);
console.time('n =  60,000');
jsReduce(randomArr);
console.timeEnd('n =  60,000');

randomArr = randomNumberArr(80000);
console.time('n =  80,000');
jsReduce(randomArr);
console.timeEnd('n =  80,000');

randomArr = randomNumberArr(100000);
console.time('n = 100,000');
jsReduce(randomArr);
console.timeEnd('n = 100,000');

console.log('\n');

/******************************************************************************/

console.log('Tests for array.every...');
randomArr = randomNumberArr(1000);
console.time('n =   1,000');
jsEvery(randomArr);
console.timeEnd('n =   1,000');

randomArr = randomNumberArr(10000);
console.time('n =  10,000');
jsEvery(randomArr);
console.timeEnd('n =  10,000');

randomArr = randomNumberArr(20000);
console.time('n =  20,000');
jsEvery(randomArr);
console.timeEnd('n =  20,000');

randomArr = randomNumberArr(40000);
console.time('n =  40,000');
jsEvery(randomArr);
console.timeEnd('n =  40,000');

randomArr = randomNumberArr(50000);
console.time('n =  50,000');
jsEvery(randomArr);
console.timeEnd('n =  50,000');

randomArr = randomNumberArr(60000);
console.time('n =  60,000');
jsEvery(randomArr);
console.timeEnd('n =  60,000');

randomArr = randomNumberArr(80000);
console.time('n =  80,000');
jsEvery(randomArr);
console.timeEnd('n =  80,000');

randomArr = randomNumberArr(100000);
console.time('n = 100,000');
jsEvery(randomArr);
console.timeEnd('n = 100,000');

console.log('\n');

// Write conclusion for time complexity here
/*********************************** O(n) ***********************************/ 
console.log('Time complexities for the above enumerables: O(n)');
console.log('\n');


/****************************** Testing unshift ******************************/
const jsUnshift = (arr)  => {
    const res = new Array();
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        res.unshift(arr[i]);
    }
    
    return arr;
};

// Write tests here
console.log('Tests for array.unshift...');
randomArr = randomNumberArr(1000);
console.time('n =   1,000');
jsUnshift(randomArr);
console.timeEnd('n =   1,000');

randomArr = randomNumberArr(10000);
console.time('n =  10,000');
jsUnshift(randomArr);
console.timeEnd('n =  10,000');

randomArr = randomNumberArr(20000);
console.time('n =  20,000');
jsUnshift(randomArr);
console.timeEnd('n =  20,000');

randomArr = randomNumberArr(40000);
console.time('n =  40,000');
jsUnshift(randomArr);
console.timeEnd('n =  40,000');

randomArr = randomNumberArr(50000);
console.time('n =  50,000');
jsUnshift(randomArr);
console.timeEnd('n =  50,000');

randomArr = randomNumberArr(60000);
console.time('n =  60,000');
jsUnshift(randomArr);
console.timeEnd('n =  60,000');

randomArr = randomNumberArr(80000);
console.time('n =  80,000');
jsUnshift(randomArr);
console.timeEnd('n =  80,000');

randomArr = randomNumberArr(100000);
console.time('n = 100,000');
jsUnshift(randomArr);
console.timeEnd('n = 100,000');

// Write conclusion for time complexity here
/*********************************** O(n) ***********************************/ 
console.log('Time complexity: O(n)');
console.log('\n');


/****************************** Testing shift ******************************/
const jsShift = (arr)  => {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        arr.shift();
    }
    
    return arr;
};

// Write tests here
console.log('Tests for array.shift...');
randomArr = randomNumberArr(1000);
console.time('n =   1,000');
jsShift(randomArr);
console.timeEnd('n =   1,000');

randomArr = randomNumberArr(10000);
console.time('n =  10,000');
jsShift(randomArr);
console.timeEnd('n =  10,000');

randomArr = randomNumberArr(20000);
console.time('n =  20,000');
jsShift(randomArr);
console.timeEnd('n =  20,000');

randomArr = randomNumberArr(40000);
console.time('n =  40,000');
jsShift(randomArr);
console.timeEnd('n =  40,000');

randomArr = randomNumberArr(50000);
console.time('n =  50,000');
jsShift(randomArr);
console.timeEnd('n =  50,000');

randomArr = randomNumberArr(60000);
console.time('n =  60,000');
jsShift(randomArr);
console.timeEnd('n =  60,000');

randomArr = randomNumberArr(80000);
console.time('n =  80,000');
jsShift(randomArr);
console.timeEnd('n =  80,000');

randomArr = randomNumberArr(100000);
console.time('n = 100,000');
jsUnshift(randomArr);
console.timeEnd('n = 100,000');

// Write conclusion for time complexity here
/*********************************** O(n) ***********************************/ 
console.log('Time complexity: O(n)');
console.log('\n');
