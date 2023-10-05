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
    // let hash = sha256(key);
    // hash = hash.slice(0,8);
    // hash = parseInt(hash, 16);
    // // console.log({ hash })
    // return hash;
    return parseInt(sha256(key).slice(0,8), 16);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity /* || this.data.length */;
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


// const hash = sha256('shane');

// console.log(parseInt(hash.slice(0, 8), 16) % 4);


module.exports = HashTable;
