class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    // Your code here
    if (index >= this.length) return undefined;
    return this.data[index];
  }

  unshift(val) {
    // if (this.length === this.capacity) this.resize()
    // Your code here
    /*
      Places the incoming at index 0
      If there are already values in the array
        shift them to the right by 1 starting from the last element
        moving in reverse.
      Start at the `this.length` index
      If index is at 0 place the new element
      Increase the length
      val = 
      this.length = 4
      i = 


    i
      [4,3,2,1]
    */

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;
    return this.length;
  }
}

module.exports = DynamicArray;
