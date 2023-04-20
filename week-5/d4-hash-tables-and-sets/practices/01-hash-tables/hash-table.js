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
    const kvp = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    if (this.data[index]) throw new Error('hash collision or same key/value pair already exists!')

    this.data[index] = kvp;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    kvp.next = this.data[index]; //=> this could be null
    this.data[index] = kvp;
    this.count++;
  }

  insert(key, value) {
    // Your code here
    const index = this.hashMod(key);

    let currentKVP = this.data[index]; // COULD BE NULL!!!

    while (currentKVP) {
      if (currentKVP.key === key) {
        break;
      }
      currentKVP = currentKVP.next;
    }

    // while (currentKVP && currentKVP.key !== key) {
    //   currentKVP = currentKVP.next;
    // }

    if (currentKVP) {
      currentKVP.value = value;
    } else {
      const kvp = new KeyValuePair(key, value);
      kvp.next = this.data[index]; //=> this could be null
      this.data[index] = kvp;
      this.count++;

    }
    
  }

}

// console.log(sha256('Shane'));
// console.log(sha256('shane'));



module.exports = HashTable;
