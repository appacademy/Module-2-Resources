

const sha256 = require('js-sha256');
// npm i js-sha256'
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
  }

  hash(key) {
    // Your code here
    // grab first 8 characters of the sha256 string
    // convert to integer parseInt
  }

  hashMod(key) {
    // Your code here
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


module.exports = HashTable;
