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
    const hexString = sha256(key).slice(0,8);
    return parseInt(`0x${hexString}`);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key);

    if (this.data[index]) {
      throw Error('hash collision or same key/value pair already exists!')
    } else {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    if (this.data[index]) newPair.next = this.data[index];
    
    this.data[index] = newPair;
    
    this.count++;
  }

  insert(key, value) {
    // Your code here
    const index = this.hashMod(key);

    let current = this.data[index];
    // let prev = null;
    
    // Iterate through the list to check if the key already exists
    while (current && current.key !== key) {
      // prev = current;
      current = current.next;
    }

    if (current) current.value = value;
    else {
      const newPair = new KeyValuePair(key, value);
      // prev.next = newPair
      if (this.data[index]) newPair.next = this.data[index];
      this.data[index] = newPair;
      this.count++;
    }
  }

}


module.exports = HashTable;
