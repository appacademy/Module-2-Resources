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
    // console.log({ key });
    // let hash = sha256(key);
    // hash = hash.substring(0, 8);
    // hash = parseInt(hash, 16);
    // // console.log({ hash });
    // return hash;

    return parseInt(sha256(key).substring(0, 8), 16);
  }

  hashMod(key) {
    // Your code here
    // const hash = this.hash(key);
    // // console.log({ hash });
    // return hash % this.capacity;
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const newKvp = new KeyValuePair(key, value);
    // console.log({ newKvp });
    const index = this.hashMod(key);

    if (this.data[index])
      throw new Error("hash collision or same key/value pair already exists!");

    this.data[index] = newKvp;
    // console.log(this.data);
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const kvp = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    // if (this.data[index]){}
    kvp.next = this.data[index]; // could be null
    this.data[index] = kvp;
    this.count++;
    return this.count;
  }

  insert(key, value) {
    // Your code here
    const index = this.hashMod(key);
    let curr = this.data[index]; // THIS COULD BE NULL;

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
      kvp.next = this.data[index]; // could be null
      this.data[index] = kvp;
      this.count++;
    }
    return this.count;
  }
}

// const hash = sha256("ab");
// // const hash2 = sha256("A");
// console.log(parseInt(hash.substring(0, 8), 16) % 4);
// // console.log(hash2);

module.exports = HashTable;
