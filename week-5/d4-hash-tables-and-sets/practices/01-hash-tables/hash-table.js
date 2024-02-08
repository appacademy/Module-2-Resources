const sha256 = require("js-sha256");
// npm i js-sha256'
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    // grab first 8 characters of the sha256 string
    const hashString = sha256(key).slice(0, 8);

    // convert to integer parseI
    return parseInt(`0x${hashString}`);
  };

  hashMod(key) {

    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {

    const index = this.hashMod(key);

    // const newPair = new KeyValuePair(key, value);

    if(!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      throw Error(`hash collision or same key/value pair already exists!`)
    }
  }

  insertWithHashCollisions(key, value) {


    const index = this.hashMod(key);

    const newPair = new KeyValuePair(key, value);

    if(!this.data[index]) {
      this.data[index] = newPair;

    } else {

      newPair.next = this.data[index];
      this.data[index] = newPair
    }

    this.count++;
  }

  insert(key, value) {

    const index = this.hashMod(key);

    let currentPair = this.data[index];

    while(currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    };

    if(currentPair) {
      currentPair.value = value;
    } else {

      const newPair = new KeyValuePair(key, value);

      if(!this.data[index]) {
        this.data[index] = newPair
      } else {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      };

      this.count++;
    }

  };
}
// hashTable = new HashTable(2);
// console.log(hashTable.hash("A"));
// hashTable.insertNoCollisions('key1', 'value1');// 0

module.exports = HashTable;
