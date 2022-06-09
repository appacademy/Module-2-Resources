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
        return parseInt(`0x${hashHexString}`);
        // return parseInt(hashHexString, 16);
    }

    // obj.keyname = value
    hashMod(key) {
        // console.log(this.hash(key) % this.capacity);
        return this.hash(key) % this.capacity;
    }

    insertNoCollisions(key, value) {
        // Your code here
        // const index = hashmodoutputhere
    }

    insertWithHashCollisions(key, value) {
        // Your code here
    }

    insert(key, value) {
        // Your code here
    }
}

module.exports = HashTable;
