class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity)
  }

  read(index) {
    // console.log(this)
    return this.data[index]
  }

  unshift(val) {
    /*
      unshift adds a value to the front of the array
         the zeroth index

      need to shift all elements to the right by 1 slot
        to make space for the incoming value
                      i
        [4, 3, 2, 1, <>, <>, <>, <>]
    */

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i-1]
    }

    this.data[0] = val;
    this.length++;
    // console.log('this', this)
    return this.length;
    // Your code here
  }

}


module.exports = DynamicArray;
