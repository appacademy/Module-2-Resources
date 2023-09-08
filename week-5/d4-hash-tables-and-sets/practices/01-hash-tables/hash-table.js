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
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    // Your code here
    // let hash = sha256(key);
    // hash = hash.slice(0,8);
    // hash = parseInt(hash, 16);
    // return hash;
    // // console.log({hash})
    return parseInt(sha256(key).slice(0,8), 16);
  }

  hashMod(key) {
    // Your code here
    // const hash = this.hash(key);
    // return hash % this.capacity;
    return this.hash(key) % this.capacity;
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

// let hash = sha256('shane');
// // const hash2 = sha256('Shane');
// // const hash3 = sha256('ShaNe');

// hash = hash.slice(0,8)
// console.log(parseInt(hash, 16));
// console.log(hash2)
// console.log(hash3)


module.exports = HashTable;
