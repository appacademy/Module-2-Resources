class DynamicArray {

  constructor(defaultSize=4) {
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
    /*
    Adds a value/element to the FRONT of an array
    If there aren't any values in the array
      - this.data[0] = value
      - this.length += 1
    If there are elements in the array
     - iterate starting at this.length
     - while index is greater than 0
     - copy the element at index - 1 over to the index
    i
    [2, 3, 4, 5]
    */
    // Your code here
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i-1];
    }

    this.data[0] = val;
    this.length++;
    return this.length;
  }

}


module.exports = DynamicArray;
