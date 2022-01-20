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
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    //add to head method if collision happens
    //empty bucket
    if (!this.data[index]) {
      this.data[index] = newPair;
    } else {
      //bucket has something in it
      newPair.next = this.data[index];
      this.data[index] = newPair;
    }
    this.count++;
  }

  insert(key, value) {
    // Your code here
    const index = this.hashMod(key);
    let currentPair = this.data[index];

    //check if same key already exists
    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }
    //if truthy the same key exists so update value
    if (currentPair) {
      currentPair.value = value;
    } else {
      const newPair = new KeyValuePair(key, value);
      if (!this.data[index]) {
        this.data[index] = newPair;
      } else {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      }
      this.count++;
    }
  }
}

module.exports = HashTable;
