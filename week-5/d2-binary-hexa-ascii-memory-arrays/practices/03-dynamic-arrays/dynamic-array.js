class DynamicArray {
  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    // Your code here
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }
    return this.data[index];
  }

  unshift(val) {
    // Your code here
    /*
                        i
     [4,3,2,1,<>,<>,<>,<>]
    */

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;
    // console.log(this.data);
  }
}

module.exports = DynamicArray;
