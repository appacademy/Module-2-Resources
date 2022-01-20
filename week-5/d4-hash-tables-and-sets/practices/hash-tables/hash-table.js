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
    //first 8 chars of sha256 hash of key
    const hashHexString = sha256(key).slice(0, 8);
    //convert to int
    return parseInt(`0x${hashHexString}`);
  }

  hashMod(key) {
    // Your code here
    //get index after hashing
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    //find the index
    const index = this.hashMod(key);

    //check to see if any key/value pairs at bucket
    if (!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
      //if something exists at bucket
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
