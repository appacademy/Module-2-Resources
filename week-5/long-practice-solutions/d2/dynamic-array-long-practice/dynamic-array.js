class DynamicArray {
  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    if (index >= this.length) return undefined;

    return this.data[index];
  }

  push(val) {
    if (this.length >= this.capacity) this.resize();

    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    if (this.length <= 0) return undefined;

    this.length--;
    const val = this.data[this.length];
    this.data[this.length] = undefined;

    return val;
  }

  shift() {
    if (this.length <= 0) return undefined;

    const val = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.length--;
    this.data[this.length] = undefined;

    return val;
  }

  unshift(val) {
    if (this.length >= this.capacity) this.resize();

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] == val) {
        return i;
      }
    }

    return -1;
  }

  resize() {
    this.capacity *= 2;
    const newData = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
  }
}

module.exports = DynamicArray;
