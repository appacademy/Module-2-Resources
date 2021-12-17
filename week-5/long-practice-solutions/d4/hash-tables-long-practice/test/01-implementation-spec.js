const { expect } = require('chai');

const HashTable = require("../phases/01-implementation");

describe ('Phase 1', function () {

  let hashTable;

  beforeEach(function () {

    hashTable = new HashTable(2);

  });

  it('has count, capacity, and data properties', function () {

    expect(hashTable.count).to.equal(0);
    expect(hashTable.capacity).to.equal(2);
    expect(hashTable.data).to.deep.equal([null, null]);
  });


  it('can be initialized to different size', function () {

    hashTable = new HashTable(4);

    expect(hashTable.count).to.equal(0);
    expect(hashTable.capacity).to.equal(4);
    expect(hashTable.data).to.deep.equal([null, null, null, null]);
  });


  it('can insert a key/value pair', function () {

    hashTable.insert("key1", "value1");
    hashTable.insert("key-2", "val-2");
    hashTable.insert("key-3", "val-3");

    expect(hashTable.count).to.equal(3);
  });


  it('can read an inserted key/value pair', function () {

    hashTable.insert("key1", "value1")
    hashTable.insert("key2", "value2")
    hashTable.insert("key3", "value3")
    hashTable.insert("key5", "value5")
    hashTable.insert("key9", "value9")
    hashTable.insert("key10", "value10")

    expect(hashTable.read("key1")).to.equal("value1");
    expect(hashTable.read("key2")).to.equal("value2");
    expect(hashTable.read("key3")).to.equal("value3");
    expect(hashTable.read("key5")).to.equal("value5");
    expect(hashTable.read("key9")).to.equal("value9");
  });


  it('can handle hash collisions', function () {

    expect(hashTable.capacity).to.equal(2);

    hashTable.insert("key1", "value1");
    hashTable.insert("key9", "value9");
    hashTable.insert("key18", "value18");
    hashTable.insert("key27", "value27");
    hashTable.insert("key36", "value36");
    hashTable.insert("key45", "value45");

    expect(hashTable.read("key1")).to.equal("value1");
    expect(hashTable.read("key9")).to.equal("value9");
    expect(hashTable.read("key18")).to.equal("value18");
    expect(hashTable.read("key27")).to.equal("value27");
    expect(hashTable.read("key36")).to.equal("value36");
    expect(hashTable.read("key45")).to.equal("value45");
  });


  it('can double in size while retaining data', function () {

    hashTable.insert("key1", "value1");
    hashTable.insert("key2", "value2");
    hashTable.insert("key3", "value3");

    let capacity = hashTable.capacity;

    hashTable.resize();

    expect(hashTable.count).to.equal(3);
    expect(hashTable.capacity).to.equal(capacity * 2);
    expect(hashTable.data.length).to.equal(capacity * 2);

    expect(hashTable.read("key1")).to.equal("value1");
    expect(hashTable.read("key2")).to.equal("value2");
    expect(hashTable.read("key3")).to.equal("value3");
  });


  it('can write and read 25 thousand values in under 1 second', function () {

    target = 25000;

    timeout = 1000;
    startTime = Date.now();

    // Insert key/value pairs
    for (let i = 0 ; i < target ; i++) {
      hashTable.insert(`k-${i}`, `v-${i}`);

      if (Date.now() - startTime > timeout) {
        expect(i).to.be.above(target);
        break;
      }
    }

    // // Read key/value pairs
    startTime = Date.now();
    for (let i = 0 ; i < target ; i++) {
      expect(hashTable.read(`k-${i}`)).to.equal(`v-${i}`);

      if (Date.now() - startTime > timeout) {
        expect(i).to.be.above(target);
      }
    }

    expect(hashTable.count).to.equal(target);

  });

  it('can delete a Key Value Pair', () => {
    hashTable.insert("key1", "value1")
    hashTable.insert("key2", "value2")
    hashTable.insert("key3", "value3")
    hashTable.insert("key5", "value5")
    hashTable.insert("key9", "value9")
    hashTable.insert("key10", "value10")

    hashTable.delete("key2")
    hashTable.delete("key9")
    hashTable.delete("key10")

    expect(hashTable.read("key1")).to.equal("value1");
    expect(hashTable.read("key2")).to.equal(undefined)
    expect(hashTable.read("key9")).to.equal(undefined)
    expect(hashTable.delete("key2")).to.equal(undefined)
    expect(hashTable.read("key3")).to.equal("value3");

    expect(hashTable.count).to.equal(3);
  });

});
