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
    // console.log(this.data);
  }

  hash(key) {
    // Your code here
    // let hash = sha256(key);
    // hash = hash.slice(0, 8);
    // const decimal = parseInt(hash, 16);
    // return decimal;
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key) {
    // Your code here
    // const hashedInteger = this.hash(key);
    // const index = hashedInteger % this.capacity;
    // return index;
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    if (this.data[index]) {
      throw new Error('hash collision or same key/value pair already exists!');
    }

    this.data[index] = kvp;
    this.count++;
    return this.count;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }
}

// const hash = sha256('shane');
// const hash2 = sha256('Shane');
// console.log(parseInt(hash.slice(0, 8), 16) % 4);
// console.log(hash2);

module.exports = HashTable;
