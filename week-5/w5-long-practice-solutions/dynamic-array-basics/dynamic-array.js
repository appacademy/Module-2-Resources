class DynamicArray {

  constructor(defaultSize=4) {

    //!!START
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
    //!!END

  }

  read(index) {

    //!!START
    if (index >= this.length) return undefined;

    return this.data[index];
    //!!END
  }

  unshift(val) {

    //!!START
    for (let i = this.length ; i > 0 ; i--) {
      this.data[i] = this.data[i-1];
    }

    this.data[0] = val;
    this.length++;
    //!!END
  }

}


module.exports = DynamicArray;
