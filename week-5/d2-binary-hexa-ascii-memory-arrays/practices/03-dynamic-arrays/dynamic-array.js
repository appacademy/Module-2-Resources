

class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;

  }

  read(index) {

    if(index >= this.length) return undefined;

    return this.data[index];
  }

  unshift(val) {
    // add to the front
    // [1,2,3,4]
    // 0 [0,1,2,3,4]
    // console.log(this.data)
    for(let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
      // console.log(this.data)
    }

    this.data[0] = val
    // console.log(this.data)
    this.length++;
  }

}

// let arr = [1];
// console.log(arr[1]);// undefined

// let myArr = new DynamicArray()
// myArr.unshift(0)
// length - 0
// this.data = [<e>,<e>,<e>,<e>,<e>,<e> ,<e>,<e>]
// this.capacity = 8

// function name(defaultName = 'brandon') {
//   let greeting = 'hello'
//   console.log(`${greeting} ${defaultName}`);
// }


// name('maica', 'hello')
// name('tim', 'hello')
// name('kim', 'hello')

module.exports = DynamicArray;
