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
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}
// console.log(parseInt(sha256('abnskduealnvas;dfhdkk').slice(0,8),16))
// console.log(sha256('A'))
// console.log(sha256('b'))
// console.log(sha256('B'))
// console.log(sha256('ab'))
// console.log(sha256('AB'))

module.exports = HashTable;
