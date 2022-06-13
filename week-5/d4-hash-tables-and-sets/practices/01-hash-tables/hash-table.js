const sha256 = require('js-sha256');

class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

// {} new Set() new Map()  []
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
        // const index = hashmodoutputhere
        const index = this.hashMod(key);
        // console.log(index);
        const newPair = new KeyValuePair(key, value);

        // if nothing is at that index
        if (!this.data[index]) {
            this.data[index] = newPair;
            this.count++;
        } else {
            // if there is already a keyvalue pair there
            throw new Error(
                'hash collision or same key/value pair already exists!'
            );
        }
    }

    insertWithHashCollisions(key, value) {
        const index = this.hashMod(key);
        const newPair = new KeyValuePair(key, value);

        if (!this.data[index]) {
            // if that bucket is empty
            this.data[index] = newPair;
        } else {
            // if something is at that bucket, handle collision
            // with add to head
            newPair.next = this.data[index];
            this.data[index] = newPair;
        }
        // this.data[index] is the equivalent to this.head

        this.count++;
    }

    insert(key, value) {
        const index = this.hashMod(key);

        let currentPair = this.data[index];

        while (currentPair && currentPair.key != key) {
            currentPair = currentPair.next;
        }

        if (currentPair) {
            currentPair.value = value;
        } else {
            const newPair = new KeyValuePair(key, value);

            if (!this.data[index]) {
                this.data[index] = newPair;
            } else {
                newPair.next = this.data[index];
                this.data[index] = newPair;
            }

            this.count++;
        }
    }
}

module.exports = HashTable;
