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

  push(val) {

    //!!START
    if (this.length >= this.capacity) this.resize();

    this.data[this.length] = val;
    this.length++;
    //!!END
  }


  pop() {

    //!!START
    if (this.length <= 0) return undefined;

    this.length--;
    const val = this.data[this.length];
    this.data[this.length] = undefined;

    return val;
    //!!END
  }

  shift() {

    //!!START
    if (this.length <= 0) return undefined;

    const val = this.data[0];
    for (let i = 0 ; i < this.length - 1 ; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.length--;
    this.data[this.length] = undefined;

    return val;
    //!!END
  }

  unshift(val) {

    //!!START
    if (this.length >= this.capacity) this.resize();

    for (let i = this.length ; i > 0 ; i--) {
      this.data[i] = this.data[i-1];
    }

    this.data[0] = val;
    this.length++;
    //!!END
  }

  indexOf (val) {

    //!!START
    for (let i = 0 ; i < this.length ; i++) {
      if (this.data[i] == val) {
        return i;
      }
    }

    return -1;
    //!!END
  }

  resize () {

    //!!START
    this.capacity *= 2;
    const newData = new Array(this.capacity);

    for (let i = 0 ; i < this.length ; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
    //!!END
  }

}


module.exports = DynamicArray;
