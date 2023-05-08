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
    /*
      Adds a value to the FRONT of an array
      If there are any elements in the array
        each element must unshift to the right 
        by one
      Start at this.length
      look at the index to the left or i - 1
      decrement i
      if i === 0
       stop iterating

      arr at index 0 = the incoming val
            i
     4 =>  [4, 3, 2, 1]
    */
    //  if (this.length === this.capacity) this.resize()
     for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i-1];
     }

     this.data[0] = val;
     this.length++;
     return this.length;
  }

  // resize() {

  // }

}




module.exports = DynamicArray;
