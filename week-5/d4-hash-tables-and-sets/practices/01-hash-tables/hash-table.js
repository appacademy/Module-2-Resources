const sha256 = require("js-sha256");

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

// const shane = sha256("shane");
// const Shane = sha256("Shane");
// console.log(parseInt(shane.substring(0, 8), 16) % 4);
// console.log(Shane);

module.exports = HashTable;
