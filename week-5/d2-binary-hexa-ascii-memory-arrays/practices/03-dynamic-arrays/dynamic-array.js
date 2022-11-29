class DynamicArray {

  constructor(defaultSize=4) {
    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    // Your code here
    if (index >= this.length) {
      return undefined;
    }
    return this.data[index];
  }

  unshift(val) {
    // Your code here
  //   if (this.length < this.capacity) {
  //     for (let i = this.data.length - 1; i > 0; i-- ) {
  //       this.data[i] = this.data[i-1];
  //       if ((i - 1) === 0) {
  //         this.data[0] = val;
  //         this.length++;
  //       }
  //     }
  //   }
  //   return this.length;

      
    for (let i = this.length; i > 0; i-- ) {
      this.data[i] = this.data[i-1];
    }
    
    this.data[0] = val;
    this.length++;
    return this.length;
  }

}   
// i
//[3,2,1,<>,<>,<>,<>,<>]

module.exports = DynamicArray;
