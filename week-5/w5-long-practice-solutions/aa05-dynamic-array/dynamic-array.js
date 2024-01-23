class DynamicArray {
  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  push(val) {
    // Your code here
    if (this.length === this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    // Your code here
    if (!this.length) return undefined;

    this.length--;
    const pop = this.data[this.length];
    this.data[this.length] = undefined;

    return pop;
  }

  shift() {
    // Your code here
    if (!this.length) return undefined;

    const shift = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;

    return shift;
  }

  unshift(val) {
    // Your code here
    if (this.length === this.capacity) this.resize();

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    // Your code here
    for (let i = 0; i < this.length; i++) {
      if (val === this.data[i]) return i;
    }
    return -1;
  }

  resize() {
    // Your code here
    const oldData = this.data;

    this.capacity *= 2;
    this.data = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      this.data[i] = oldData[i];
    }
  }
}

module.exports = DynamicArray;
