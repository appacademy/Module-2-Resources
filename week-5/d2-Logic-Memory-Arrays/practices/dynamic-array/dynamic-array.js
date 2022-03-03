class DynamicArray {

    constructor(defaultSize=4) {

      // Fill this out
      this.data = new Array(defaultSize);
      this.capacity = defaultSize;
      this.size = 0;
    }

    read(index) {

      // Fill this out
      // You may not use any built-in JS array functions
      if (index >= this.size) return undefined;
      return this.data[index];
    }

    unshift(val) {

      // Fill this out
      // You may not use any built-in JS array functions
      for (let i = this.size; i > 0; i--){
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = val;
      this.size++;

    }

  }


  module.exports = DynamicArray;
