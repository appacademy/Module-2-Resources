class DynamicArray {
  constructor(defaultSize = 4) {
    // Fill this out
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }
  //[undefined, undefined, undefined, undefined]
  //length = 0
  //return data [1]
  //return undefined because length 0
  // or
  //length 1 => added one thing on purpose to my array
  //return data[1]
  //['cat', undefined, undefined, undefined]
  //return data[5]
  //undefined
  read(index) {
    // Fill this out
    // You may not use any built-in JS array functions
    if (index >= this.length) return undefined;
    return this.data[index];
  }

  unshift(val) {
    // Fill this out
    // You may not use any built-in JS array functions
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }
}

module.exports = DynamicArray;
