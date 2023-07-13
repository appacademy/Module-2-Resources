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
    // let hash = sha256(key)
    // hash = hash.substring(0,8);
    // hash = parseInt(hash, 16);
    // // console.log({hash})
    // return hash;
    return parseInt(sha256(key).substring(0, 8), 16)
  }

  hashMod(key) {
    // Your code here
    let hash = this.hash(key);
    let index = hash % this.capacity;
    console.log({index})
    return index
  }

  insertNoCollisions(key, value) {
    // Your code here
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}

// const hash = sha256('a');
// const hash2 = sha256('A42354');


// console.log(parseInt(hash.substring(0, 8), 16) % 2)
// console.log(parseInt(hash2.substring(0, 8), 16) % 2)
module.exports = HashTable;
