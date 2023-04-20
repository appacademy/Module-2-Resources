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
    // const integer = parseInt(first8, 16)
    // return integer;
    return parseInt(sha256(key).slice(0,8), 16)
  }

  hashMod(key) {
    // Your code here
    // const hashInteger = this.hash(key);
    // const index = hashInteger % this.capacity;
    // return index;
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const newNode = new KeyValuePair(key, value);

    // if there is a node at this index throw an error
    // this.data[index] == this.head

    this.count++
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}

// console.log(sha256('Shane'));
// console.log(sha256('shane'));



module.exports = HashTable;
