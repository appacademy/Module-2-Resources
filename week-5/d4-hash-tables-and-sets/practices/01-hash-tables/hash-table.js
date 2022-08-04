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
    const hashKey = sha256(key).substring(0,8);

    return parseInt(`0x${hashKey}`);
    // return parseInt(`0x${sha256(key).substring(0,8)}`);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;

  }

  insertNoCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    const idx = this.hashMod(key);

    if (this.data[idx]) {
      throw Error('hash collision or same key/value pair already exists!')
    } else {
      this.data[idx] = kvp;
      this.count++;
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    const idx = this.hashMod(key);

    if (!this.data[idx]) {
      this.data[idx] = kvp
    } else {
      let oldKey = this.data[idx];
      kvp.next = oldKey;
      this.data[idx] = kvp;
    }
    // if (this.data[idx]) kvp.next = this.data[idx];
    // this.data[idx] = kvp;
    this.count++;

  }

  insert(key, value) {
    // Your code here
    // find the index (bucket that we want to use)
    const idx = this.hashMod(key);

    // grab the head of the bucket this.data[idx] this could be null
    let currentPair = this.data[idx];

    // loop through the list until we get to the end or find the key
    // pair with the key we are trying to change the value
    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }

    // if the kvp already exists simply overwrite it's value
    if (currentPair) {
      currentPair.value = value;
    } else {
      // otherwise create a kvp and insert
      const kvp = new KeyValuePair(key, value)

      if (this.data[idx]) {
        // if there is something in the bucket
        // point the new kvp at this.data[idx]
        kvp.next = this.data[idx];
        // reassign this.data[idx] to the new kvp
        this.data[idx] = kvp
      } else {
        // otherwise point this.data[idx] at the new kvp
        this.data[idx] = kvp;
      }
      // increment count property
      this.count++;
    }
  }

}


module.exports = HashTable;
