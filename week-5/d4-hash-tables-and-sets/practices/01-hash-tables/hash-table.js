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
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    const hashHexString = sha256(key).slice(0, 8);
    return parseInt(hashHexString, 16);
    // return parseInt(`0x${hashHexString}`);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    const kvp = new KeyValuePair(key, value);
    const idx = this.hashMod(key);

    // if nothing is at this index do something
    if (!this.data[idx]) {
      this.data[idx] = kvp;
      this.count++;
    } else {
      throw new Error(
        'hash collision or same key/value pair already exists!'
        )
    }
  }




  insertWithHashCollisions(key, value) {
    const kvp = new KeyValuePair(key, value);
    const idx = this.hashMod(key);

    if (!this.data[idx]) {
      this.data[idx] = kvp;
    } else {

      // node.next = this.head;
      // this.head = node
      kvp.next = this.data[idx];
      this.data[idx] = kvp;
    }

    this.count++
  }

    //                kvp1
    //                 |
    // [ null, null, kvp2, null, ] this.data[idx]

  insert(key, value) {
    const idx = this.hashMod(key);

    // let curr = this.head
    let curr = this.data[idx];

    while (curr && curr.key !== key) {
      curr = curr.next
    }

    if (curr) {
      curr.value = value;
    } else {
      const kvp = new KeyValuePair(key, value);

      if (!this.data[idx]) {
        this.data[idx] = kvp;
      } else {
  
        // node.next = this.head;
        // this.head = node
        kvp.next = this.data[idx];
        this.data[idx] = kvp;
      }
  
      this.count++

    }


  }

}


module.exports = HashTable;
