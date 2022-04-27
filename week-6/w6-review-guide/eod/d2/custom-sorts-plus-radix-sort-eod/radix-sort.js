const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
const unsortedArr2 = [2, 3, 1];

// for (let i = 0; i < 500000; i++) {
//     unsortedArr2.push(Math.floor(Math.random() * 500000));
// }

// console.log({unsortedArr2})

const getNum = (num, index) => {
    // convert the number to a string
    const strNum = String(num);
    // console.log({strNum});
    
    let end = strNum.length - 1;
    // console.log({end});
    const foundNum = strNum[end - index];
    // console.log({foundNum});
    // console.log(typeof foundNum);
    if (foundNum === undefined) return 0;
    else return foundNum;
};
  
// console.log(getNum(4353, 2));

const greatestLength = arr => {
    let mostLengthy = "0";

    arr.forEach(num => {
        const strNum = String(num);

        if (strNum.length > mostLengthy.length) mostLengthy = strNum;
    });

    return mostLengthy.length;
};

const radixSort = arr => {
    let maxLength = greatestLength(arr);
  
    for (let i = 0; i < maxLength; i++) {
      let buckets = Array.from({ length: 10 }, () => []);
  
      for (let j = 0; j < arr.length; j++) {
        let num = getNum(arr[j], i);
  
        if (num !== undefined) buckets[num].push(arr[j]);
      };
      arr = buckets.flat();
    };
    return arr;
};
  
  
console.log(radixSort(unsortedArr2));