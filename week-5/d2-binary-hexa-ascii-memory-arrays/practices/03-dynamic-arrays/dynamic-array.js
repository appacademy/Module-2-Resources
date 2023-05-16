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
    // Your code here
    /*
    Adds a value to the FRONT of an array
    If there are any elements in the array, each
    element must shift to the right by 1

    Start at the END of the array and iterate backwards
    starting at our this.length copying each element
    from index - 1 to the current index.

    If the index is 0 leave the loop

    array at index 0 equals the incoming value

    increment the this.length property

    return the this.length property
    i
    [3,2,1,<>,<>,<>,<>,<>]
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
