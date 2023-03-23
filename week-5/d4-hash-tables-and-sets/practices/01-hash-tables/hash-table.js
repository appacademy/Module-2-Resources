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
    // console.log(this)
    // const hash = sha256(key);
    // const first8 = hash.slice(0,8);
    // const decimal = parseInt(first8, 16);
    // return decimal;
    return parseInt(sha256(key).slice(0,8), 16);
  }

  hashMod(key) {
    // Your code here
    // const hash = this.hash(key);
    // const index = hash % this.capacity;
    // return index;
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    if (this.data[index]) throw new Error('hash collision or same key/value pair already exists!')

    this.data[index] = kvp;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    if (this.data[index]) kvp.next = this.data[index];
    this.data[index] = kvp;
    console.log(this.data[index])
    this.count++;
  }

  insert(key, value) {
    // Your code here
  
  }

}
// console.log(parseInt(sha256('shane'), 16));

module.exports = HashTable;
