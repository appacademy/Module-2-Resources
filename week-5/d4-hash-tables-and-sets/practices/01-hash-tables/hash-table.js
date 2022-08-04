const sha256 = require('js-sha256');

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
    const hashKey = sha256(key).substring(0,8);

    return parseInt(`0x${hashKey}`);
    // return parseInt(`0x${sha256(key).substring(0,8)}`);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;

  }

  insertNoCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    const idx = this.hashMod(key);

    if (this.data[idx]) {
      throw Error('hash collision or same key/value pair already exists!')
    } else {
      this.data[idx] = kvp;
      this.count++;
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    const idx = this.hashMod(key);

    if (!this.data[idx]) {
      this.data[idx] = kvp
    } else {
      let oldKey = this.data[idx];
      kvp.next = oldKey;
      this.data[idx] = kvp;
    }
    // if (this.data[idx]) kvp.next = this.data[idx];
    // this.data[idx] = kvp;
    this.count++;

  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;
