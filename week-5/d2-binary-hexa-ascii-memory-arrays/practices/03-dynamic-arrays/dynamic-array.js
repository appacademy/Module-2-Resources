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
    console.log(this.data)
    return this.data[index]
  }

  // pretending unshift method doesn't already exist
  // adding to front
  unshift(val) { // Time O(n) - iterating over entire array, to move values, we don't know array's length

    // Your code here
    console.log(this.data, "Beginning")

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    // console.log(this.data, "after loop")

    this.data[0] = val
    this.length++

    console.log(this.data, "END \n\n")

    return this.length
  }

}

// const briArr = new Array(4)
// console.log(briArr) // [ <4 empty items> ]
module.exports = DynamicArray;
