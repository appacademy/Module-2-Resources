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
    const hashHexStr = sha256(key).slice(0, 8);
    //convert to int
    return parseInt(`0x${hashHexStr}`);
  }

  hashMod(key) {
    // Your code here
    //get index after hashing
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    //find index
    const index = this.hashMod(key);

    //if index empty
    if (!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      //bucket is occupied
      throw Error("hash collision or same key/value pair already exists");
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    //empty bucket
    if (!this.data[index]) {
      this.data[index] = newPair;
    } else {
      //bucket is occupied
      //add to head
      newPair.next = this.data[index];
      this.data[index] = newPair;
    }
    this.count++;
  }

  insert(key, value) {
    // Your code here
  }
}

module.exports = HashTable;
