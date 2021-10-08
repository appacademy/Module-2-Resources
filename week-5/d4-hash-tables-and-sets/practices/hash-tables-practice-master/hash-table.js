const sha256 = require("js-sha256");

// Do not change this
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    // fill this in
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    // fill this in
    const hashedKey = sha256(key).slice(0, 8);
    return parseInt(`0x${hashedKey}`);
  }

  hashMod(key) {
    // fill this in
    return this.hash(key) % this.capacity;
  }

  // insert(key, value) {
  //   // fill this in
  //   //find index
  //   const index = this.hashMod(key);

  //   if (!this.data[index]) { //if nothing at index
  //     this.data[index] = new KeyValuePair(key, value);
  //     this.count++;
  //   } else { //if something already at index
  //     throw Error("hash collision");
  //   }
  // }

  insert(key, value) {
    // fill this in
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    if (!this.data[index]) {
      this.data[index] = newPair;
      this.count++;
    } else {
      newPair.next = this.data[index];
      this.data[index] = newPair;
      this.count++;
    }
  }
}

module.exports = HashTable;
