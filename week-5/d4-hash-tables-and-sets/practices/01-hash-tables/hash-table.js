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
    const kvp = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    // console.log({kvp})
    // console.log({index})

    if (this.data[index]) {
      throw new Error('hash collision or same key/value pair already exists!')
    }

    this.data[index] = kvp;
    // console.log(this.data[index])
    this.count++;
    return this.count;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    // if (this.data[index]) {
    // }
    kvp.next = this.data[index];
    this.data[index] = kvp;
    this.count++;
    return this.count;
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
