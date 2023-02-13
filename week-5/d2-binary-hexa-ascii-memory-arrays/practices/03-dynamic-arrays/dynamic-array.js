class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize
    this.data = new Array(this.capacity)
    // this.data = new Array(defaultSize)
    this.length = 0
    // this.count = 0
  }

  read(index) {
    // guard clause
    if (index >= this.length && index >= 0) return undefined

    return this.data[index]
  }

  unshift(val) {

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[0] = val
    this.length++


    /**
     * new DynamicArr(4) =====>
     *  I need a piece of memory big enough an array of length 4
     *
     * this.capacity of 4
     * two values inside
     * this.data = [2, 5, _, _]
     * this.data.length = 4
     * this.length = 2
     */

    // time O(n)
        /**
     * new DynamicArr(4)
     * this.capacity of 4
     * two values inside
     * this.data = [2, 5, _, _]
     * this.data.length = 4
     * this.length = 2
     *
     * i want to add 3 with DynamicArr.unshift(3)
     * the goal to move the values over to make space for 3
     * this.data = [_, 2, 5, _]
     * this.data = [2, 2, 5, _]
     * this.data = [3, 2, 5, _]
     */

    // this.data = [2, 5, _, _]
    // i = length
    // this.data = [2, 5, 5, _]
    // --i
    // this.data = [2, 2, 5, _]

    // console.log('before loop', this.data)
    // for (let i = this.length; i > 0; i--) {
    //   console.log('before shifting',this.data[i])
    //   this.data[i] = this.data[i - 1]
    //   console.log('after shifting',this.data[i])
    // }

    // this.data[0] = val
    // this.length++
    // console.log('after loop',this.data)
  }

}

const test = new DynamicArray(4)
test.unshift(5)
test.unshift(6)
test.unshift(7)
// test.unshift(8)


module.exports = DynamicArray;
