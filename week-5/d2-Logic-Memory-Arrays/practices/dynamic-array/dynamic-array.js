class DynamicArray {
  constructor(defaultSize = 4) {
    // Fill this out
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

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
      console.log(this.data[i], "data[i] - 1");

      this.data[i] = this.data[i - 1];
      console.log(this.data[i], 'data[i')
    }
    this.data[0] = val;
    this.length++;
    console.log(this.data)
  }
}

module.exports = DynamicArray;


let arr = new DynamicArray()
arr.unshift(4)
arr.unshift(3);
arr.unshift(2);
arr.unshift(1);
arr.unshift(7);

