class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    if (index >= this.length || index < 0) return undefined;
    return this.data[index];
  }

  unshift(val) {
    /*
       i
      [3, 2, 1, <>]
    */

  for (let i = this.length; i > 0; i--) {
    this.data[i] = this.data[i-1];
  }

   this.data[0] = val;
   this.length++;
   return this.length;
  }

}


module.exports = DynamicArray;
