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
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    // Your code here
    const newPair = new KeyValuePair(key, value);
    // console.log(newPair)
    const index = this.hashMod(key);
    // console.log(index)
    if (this.data[index]) throw new Error('hash collision or same key/value pair already exists!')

    this.data[index] = newPair;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const newPair = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    // if (!this.data[index]) {
    //   this.data[index] = newPair
    // } else {
    //   newPair.next = this.data[index];
    //   this.data[index] = newPair;
    // }

    // if (this.data[index]) newPair.next = this.data[index];
    // this.data[index] = newPair;

    newPair.next = this.data[index];
    this.data[index] = newPair;

    this.count++;
  }

  insert(key, value) {
    // Your code here

    // find index
    const index = this.hashMod(key);
    // grab a reference to the bucket at the index
    let currentPair = this.data[index] // THIS COULD BE NULL!!!!
    // while there is a current pair AND the current pair's key 
    //  does not match the passed in key
    while (currentPair && currentPair.key !== key) {
      // iterate over the linked list
      currentPair = currentPair.next;
    } 
    // if the current pair still exists
    if (currentPair) {
      // overwrite it's value
      currentPair.value = value;
    } else {
      // otherwise insert as normal
      const newPair = new KeyValuePair(key, value);
      newPair.next = this.data[index];
      this.data[index] = newPair;
      this.count++;
    }
    
  }

}


module.exports = HashTable;
