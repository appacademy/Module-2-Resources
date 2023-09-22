class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.length = 0
    this.capacity = defaultSize
    this.data = new Array(this.capacity)

    // console.log(this.data)
  }

  read(index) {

    // Your code here
    // console.log(this.data)
    return this.data[index]
  }

  unshift(val) { // O(n) Time

    // Your code here

    console.log("\n\n BEGINNING", this.data)

    // move/shift original values to the right of array
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
      console.log("IN FOR LOOP", this.data)

    }

    // add new value at front of array
    this.data[0] = val

    this.length++
    console.log("END", this.data)

    return this.length
  }

}


module.exports = DynamicArray;
