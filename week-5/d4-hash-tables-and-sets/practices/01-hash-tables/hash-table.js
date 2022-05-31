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
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    // Get the first 8 characters of the sha256 hash
    const hashKey = sha256(key).slice(0,8);
    
    // convert to base 10 integer and return
    return parseInt(`0x${hashKey}`);
  }

  hashMod(key) {
    // get the index after hashing and return
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // find the bucket index 
    const index = this.hashMod(key);
    
    // Inserting or throwing an error
    if (this.data[index]) {
      throw Error('hash collision or same key/value pair already exists!')
    } else {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    if (this.data[index]) {
      // deal with the hash collision
      newPair.next = this.data[index];
      this.data[index] = newPair;
    } else {
      this.data[index] = newPair;
    }

    // shorter way to write this
    // if (this.data[index]) newPair.next = this.data[index]
    // this.data[index] = newPair

    this.count++;
  }

  insert(key, value) {
    // find the index (which bucket we want to use)
    const index = this.hashMod(key);

    // grab the head of the list at that bucket (could be null)
    let currentPair = this.data[index];

    // loop through the list until we get to the end or find the key/value
    // pair with the key we are trying to insert
    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }

    // if the already exists overwrite the value of it
    if (currentPair) {
      currentPair.value = value;
    } 

    // otherwise create a new key/value pair instance and insert it
    else {
      const newPair = new KeyValuePair(key, value);

      // there is something in that bucket, add the key/value pair into the head of the list
      // and add the pointers needed
      if (this.data[index]) {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      } 
      // otherwise just add the pair to the bucket
      else {
        this.data[index] = newPair;
      }

      this.count++;
    }

  }

}


module.exports = HashTable;
