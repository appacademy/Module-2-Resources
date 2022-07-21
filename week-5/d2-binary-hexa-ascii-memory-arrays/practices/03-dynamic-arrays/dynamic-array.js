class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity); //[]

  }

  read(index) {
    // Your code here
    if (index >= this.data.length) return undefined;
    return this.data[index];
  }

  unshift(val) {
    // if this.length === this.capacity resize()
    // Your code here
    // const newArray = new Array(this.capacity);

    // newArray[0] = val;

    // for (let i = 0; i < this.capacity; i++) {
    //   newArray[i+1] = this.data[i];
    // }
    
    for (let i = this.length; i > 0; i--) {
      console.log("BEFORE: ", this.data)
      this.data[i] = this.data[i-1];
      console.log("AFTER: ", this.data)
    }
    // this.data = newArray;
    
    this.data[0] = val;
    this.length++;
  }

}
 // [ , 1, 2, 3]

module.exports = DynamicArray;
