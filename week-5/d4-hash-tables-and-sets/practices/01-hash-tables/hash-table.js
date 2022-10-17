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
    // console.log(this.data)
  }

  hash(key) {
    // Your code here
    let sha = sha256(key);
    // console.log(sha.slice(0,8))
    return parseInt(sha.slice(0, 8), 16);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const newPair = new KeyValuePair(key, value);
    const idx = this.hashMod(key);

    if (this.data[idx]) throw new Error('hash collision or same key/value pair already exists!');
    
    this.data[idx] = newPair;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const newPair = new KeyValuePair(key, value);
    const idx = this.hashMod(key);

    if (!this.data[idx]) {
      this.data[idx] = newPair;
    } else {
      newPair.next = this.data[idx];
      this.data[idx] = newPair;
    }

    // if (this.data[idx]) newPair.next = this.data[idx];
    // this.data[idx] = newPair;

    this.count++;
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
      currentPair = currentPair.next;
    }

    // if the kvp exists overwrite it's value
    if (currentPair) {
      currentPair.value = value;
      return this;
    } 
    // otherwise create the new kvp
    const newPair = new KeyValuePair(key, value);
    
    if (!this.data[idx]) {
      // if there is something in the bucket
      // point the head at the kvp
      this.data[idx] = newPair;
    } else {
      // point the new kvp at the head 
      // otherwise point the head at the new kvp
      newPair.next = this.data[idx];
      this.data[idx] = newPair;
    }

    // if (this.data[idx]) newPair.next = this.data[idx];
    // this.data[idx] = newPair;

    this.count++;

    // this.insertWithHashCollisions(key, value)

  }

}


module.exports = HashTable;
