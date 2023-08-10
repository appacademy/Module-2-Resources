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
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    // Your code here
    // console.log("key:   ", key)

    // // find hash string
    // let hash = sha256(key)
    // console.log("sha256 hash of Key:  ", hash)

    // // take first 8 chars
    // let hash8 = hash.slice(0, 8)
    // console.log("first 8 chars:   ", hash8)

    // // convert hexa to deci
    // let deci = parseInt(hash8, 16)
    // // let deci = parseInt(`0x${hash8}`)
    // console.log(deci, "\n\n")

    // return deci

    return parseInt(sha256(key).slice(0, 8), 16)
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    // Your code here
    const idx = this.hashMod(key)
    console.log({key, idx})

    console.log(this.data[idx], " DATA at idx \n\n")
    if (this.data[idx]) {
      throw new Error('hash collision or same key/value pair already exists!')
    }

    const newPair = new KeyValuePair(key, value)
    this.data[idx] = newPair

    this.count++

    // console.log(this.data)
    return this.count
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;
