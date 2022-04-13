class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index];
  }
  // The push() method adds one or more elements to the end of an 
  // array and returns the new length of the array.
  push(val) {
    if (this.length === this.capacity) this.resize()
    this.data[this.length] = val;
    this.length++;
    return this.length;
  }
  // The pop() method removes the last element from an array and returns that element. 
  // This method changes the length of the array.
  pop() {
    let res = this.data[this.length -1];
    this.data[this.length -1] = undefined;
    this.length--;
    return res;
  }
  // The shift() method removes the first element from an array and 
  // returns that removed element. This method changes the length of the array.
  shift() {
    let res = this.data[0];
    for (let i = 1; i < this.data.length; i++) {
      this.data[i-1] = this.data[i];
    }
    this.length--;
    return res;
  }
  // The unshift() method adds one or more elements to the beginning of an array 
  // and returns the new length of the array.
  unshift(val) {
    if (this.length === this.capacity) this.resize()

    for (let i = this.length; i >= 1; i--) {
      this.data[i] = this.data[i-1]
    }
    this.data[0] = val;
    this.length++;
    return this.length;
  }
  // The indexOf() method returns the first index at which a given element 
  // can be found in the array, or -1 if it is not present.
  indexOf (val) {
    for (let i = 0; i < this.data.length; i++) {
      const el = this.data[i];
      if (el === val) return i;
    }
    return -1;
  }
  // will double in size and copy elements
  resize () {
    const oldData = this.data;
    this.capacity *= 2;
    this.data = new Array(this.capacity);
    this.length = 0;

    for (let el of oldData) {
      this.push(el)
    }
  }

}


module.exports = DynamicArray;