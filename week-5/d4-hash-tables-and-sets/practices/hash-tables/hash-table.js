const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    // Your code here
    //grab first 8 char of sha256hash
    const hashHexString = sha256(key).slice(0, 8);
    //converting it to integer and returning
    return parseInt(`0x${hashHexString}`);
  }

  hashMod(key) {
    // Your code here
    //get index
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    //find index
    const index = this.hashMod(key);

    //insert key/value pair if nothing there
    if (!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      throw Error("hash collision or same key/value pair already exists!");
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }
}

module.exports = HashTable;
