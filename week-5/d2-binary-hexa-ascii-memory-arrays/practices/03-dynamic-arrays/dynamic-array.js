class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    if (index >= this.length) return undefined;

    return this.data[index];
  }

  unshift(val) {
    /*
      Adds a value to the front of an array
      If there are no values in the array
        - this.data[0] = val
        - this.length++

      If there are values in the array
          i
    => 4  [4, 1, 50, 99]
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
