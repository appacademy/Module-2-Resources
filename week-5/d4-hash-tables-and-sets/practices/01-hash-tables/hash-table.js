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
    // let hash = sha256(key);
    // hash = hash.slice(0,8);
    // hash = parseInt(hash, 16);
    // // console.log({ hash })
    // return hash;
    return parseInt(sha256(key).slice(0,8), 16);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity /* || this.data.length */;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    // console.log({ kvp })
    const idx = this.hashMod(key);
    // console.log({ idx })

    if (this.data[idx]) {
      throw new Error('hash collision or same key/value pair already exists!');
    }

    this.data[idx] = kvp;
    // console.log(this.data)
    this.count++;
    return this.count;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    const idx = this.hashMod(key);

    // if (this.data[idx]) {}

    kvp.next = this.data[idx];
    this.data[idx] = kvp;
    this.count++;
    return this.count;
  }

  insert(key, value) {
    // Your code here
    const idx = this.hashMod(key);

    let curr = this.data[idx]; // THIS COULD BE NULL

    // while (curr) {
    //   if (curr.key === key) {
    //     break;
    //   }
    //   curr = curr.next;
    // }

    while (curr && curr.key !== key) {
      curr = curr.next;
    }
    
    if (curr) {
      curr.value = value;
    } else {
      const kvp = new KeyValuePair(key, value);
      kvp.next = this.data[idx];
      this.data[idx] = kvp;
      this.count++;

    }
    
    return this.count;
  }

}


// const hash = sha256('shane');

// console.log(parseInt(hash.slice(0, 8), 16) % 4);


module.exports = HashTable;
