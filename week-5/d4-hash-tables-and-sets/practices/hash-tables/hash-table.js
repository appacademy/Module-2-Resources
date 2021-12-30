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
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    // Your code here
    //grab first 8 char of sha256hash
    const hashHexString = sha256(key).slice(0, 8);
    //converting it to integer and returning
    return parseInt(`0x${hashHexString}`);
  }

  hashMod(key) {
    // Your code here
    //get index
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    //find index
    const index = this.hashMod(key);

    //insert key/value pair if nothing there
    if (!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      throw Error("hash collision or same key/value pair already exists!");
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);
    //nothing is at the index
    if (!this.data[index]) {
      this.data[index] = newPair;
    } else {
      //if a pair is already at index
      newPair.next = this.data[index];
      this.data[index] = newPair;
    }
    this.count++;
  }

  insert(key, value) {
    // Your code here
    //find index
    const index = this.hashMod(key);
    //starting with the pair at that indecx
    let currentPair = this.data[index];
    //while there is a currentPair and the key of that pair does NOT equal the key passed into method
    while (currentPair && currentPair.key !== key) {
      //keep walking to next pair
      currentPair = currentPair.next;
    }
    //out of loop because the key matches, but we still have a current pair
    if (currentPair) {
      //because the key matches, we are overriding the value
      currentPair.value = value;

    } else {
      //nothing exists at index, so we insert new pair
      const newPair = new KeyValuePair(key, value);
      if (!this.data[index]) {
        this.data[index] = newPair;
      } else {
        //there is something at the index, but key doesn't match, so we are using ll format to insert new pair at head
        newPair.next = this.data[index];
        this.data[index] = newPair;
      }
      //increment count up to reflect total nodes in structure
      this.count++;
    }
  }
}

module.exports = HashTable;
