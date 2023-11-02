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

    // console.log(this)
  }

  hash(key) {
    // Your code here

    // const hash = sha256(key)
    // const hashSub = hash.substring(0, 8)

    // // hexa to deci
    // const deci = parseInt(hashSub, 16)
    // // console.log(deci)

    // return deci

    return parseInt(sha256(key).slice(0, 8), 16)
  }

  hashMod(key) {
    // Your code here
    const hashInt = this.hash(key)
    // console.log(hashInt)

    return hashInt % this.capacity
  }

  insertNoCollisions(key, value) {
    // Your code here
    // making new pair
    const newPair = new KeyValuePair(key, value)

    // asking hashmod for the insertion index
    const idx = this.hashMod(key)
    // console.log(idx)

    if (this.data[idx]) throw new Error('hash collision or same key/value pair already exists!')

    // reassigning the array at that index (bucket) to look at new pair
    this.data[idx] = newPair

    this.count++

    return this.count

  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const newPair = new KeyValuePair(key, value)
    const idx = this.hashMod(key)

    // console.log(`${idx} is index for key ${key}`)
    // console.log(this.data[idx], "is the access point for idx \n\n")


    // tell newPair's next property to look at whatever is at that idx
    // whether it's null or not
    newPair.next = this.data[idx]

    // reassign data at that idx to look at newPair
    this.data[idx] = newPair

    this.count++

    return this.count
  }

  insert(key, value) {
    // Your code here

    const idx = this.hashMod(key)

    let curr = this.data[idx]

    // if we're trying to insert a pair with a key that already exists
    // then overwrite "value" property
    while (curr && curr.key !== key) {
      // if (curr.key === key) {
      //   break
      // }
      curr = curr.next
    }

    if (curr) {
      curr.value = value

    } else {
      const newPair = new KeyValuePair(key, value)
      newPair.next = this.data[idx]
      this.data[idx] = newPair
      this.count++
    }

    return this.count
    // if there's nothing in the data at that index
    // if there is something at that index

  }

}

// new Array(whateverSize).fill(null)

module.exports = HashTable;
