class DynamicArray {

  constructor(capacity=4) {

    // Your code here
    this.length = 0;
    this.capacity = capacity;
    this.data = new Array(this.capacity)
    // console.log(this.data.length)
    // console.log(this.length)
  }

  read(index) {
    if (index >= this.length) {
      return undefined;
    }
    return this.data[index];
  }

  unshift(val) {

    // Your code here
    for (let i = this.length; i > 0; i--) {
      let movedVal = this.data[i-1];
      this.data[i] = movedVal;
      // this.data[i] = this.data[i-1];
    }
    this.data[0] = val;
    this.length++;
  }

}

//   0 ->  [ 1, 2, 3, 4, , , , ]
module.exports = DynamicArray;
