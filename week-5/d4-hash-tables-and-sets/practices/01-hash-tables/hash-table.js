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
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const collisionMessage = 'hash collision or same key/value pair already exists!';
    const idx = this.hashMod(key);
    let newPair = new KeyValuePair(key, value);
    
    if (this.data[idx]) throw new Error(collisionMessage);
    this.data[idx] = newPair;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const idx = this.hashMod(key);
    let newPair = new KeyValuePair(key, value);

    this.count++;
    // if (this.data[idx]) newPair.next = this.data[idx];
    // this.data[idx] = newPair;

    if (!this.data[idx]) {
      this.data[idx] = newPair;
    } else {
      newPair.next = this.data[idx];
      this.data[idx] = newPair;
    }

  }

  insert(key, value) {
    // Your code here
    // find the index (bucket that we want to use)
    const idx = this.hashMod(key);

    // grab a reference to the first node of the linked list
    // this could be null
    let currentPair = this.data[idx];

    // loop through the list until we get to the end
    // or we find a kvp with the key that we want to change the value of
    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next
    }

    // if the kvp exists overwrite it's value
    if (currentPair !== null) {
      currentPair.value = value;
      return;
    }

    // otherwise create the new kvp
    const newPair = new KeyValuePair(key, value);

    if (this.data[idx]) {
      // if there is something in the bucket
      // point the new kvp at the head 
      // point the head at the kvp
      newPair.next = this.data[idx];
      this.data[idx] = newPair;
    } else {
      // otherwise point the head at the new kvp
      this.data[idx] = newPair;
    }

    this.count++;

  }

}


module.exports = HashTable;
