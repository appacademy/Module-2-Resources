class DynamicArray {

  constructor(defaultSize=4) {
    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {

    // Your code here
    if (index >= this.length) return undefined;
    return this.data[index];
  }

  unshift(val) {
    // Check to see if length === capacity - if yes resize()
    // Your code here
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;
  }

}


module.exports = DynamicArray;
