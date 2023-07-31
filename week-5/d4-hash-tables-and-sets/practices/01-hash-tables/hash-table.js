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
    // let hash = this.hash(key);
    // let index = hash % this.capacity;
    // console.log({index})
    // return index
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const newKvp = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    if (this.data[index]) {
      throw new Error('hash collision or same key/value pair already exists!')
    }

    this.data[index] = newKvp;
    this.count++;
    return this.count;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const newKvp = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    // if (this.data[index]) {
    // }
    
    newKvp.next = this.data[index];
    this.data[index] = newKvp;
    this.count++;
    return this.count;
  }

  insert(key, value) {
    // Your code here
    const index = this.hashMod(key);
    let currentKvp = this.data[index]; // => COULD BE NULL

    while (currentKvp) {
      if (currentKvp.key === key) {
        break;
      }
      currentKvp = currentKvp.next;
    }
    
    if (currentKvp) {
      currentKvp.value = value;
    } else {
      const newKvp = new KeyValuePair(key, value);
      newKvp.next = this.data[index];
      this.data[index] = newKvp;
      this.count++;
    }
    return this.count;
  }

}

// const hash = sha256('a');
// const hash2 = sha256('A42354');


// console.log(parseInt(hash.substring(0, 8), 16) % 2)
// console.log(parseInt(hash2.substring(0, 8), 16) % 2)
module.exports = HashTable;
