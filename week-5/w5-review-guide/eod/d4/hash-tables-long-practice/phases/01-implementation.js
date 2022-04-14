class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {

    if ((this.count / this.capacity) >= 0.70) this.resize();
    const idx = this.hashMod(key);

      let curr = this.data[idx];
      
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
      return this;
    }

  }


  read(key) {
    const idx = this.hashMod(key);

    let curr = this.data[idx];

    while (curr && curr.key !== key) {
      curr = curr.next;
    }

    if (curr) {
      return curr.value;
    }
    return undefined;
  }


  resize() {
    const oldData = this.data;

    this.capacity *= 2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;

    for (let curr of oldData) {
      while(curr) {
        this.insert(curr.key, curr.value);
        curr = curr.next;
      }
    }
    return this;
  }


  delete(key) {
    const idx = this.hashMod(key);

    let curr = this.data[idx];
    let prev = null;

    while (curr && curr.key !== key) {
      prev = curr;
      curr = curr.next;
    }

    if (!curr) {
      return "Key not found";
    } else {
      if (!prev) {
        this.data[idx] = curr.next;
      } else {
        prev.next = curr.next
      }
      this.count--;
    }
  }
}


module.exports = HashTable;
