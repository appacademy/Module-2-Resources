const { expect } = require('chai');

const HashTable = require('../hash-table.js');


describe('Hash table insert no collision handling', () => {

  let hashTable;

  beforeEach(function () {

    hashTable = new HashTable(2);

  });

  it('insert adds key-value pair that does not cause collisions', () => {

    hashTable.insertNoCollisions("key-1", "val-1");
    hashTable.insertNoCollisions("key-2", "val-2");

    expect(hashTable.count).to.equal(2);
    expect(hashTable.capacity).to.equal(2);
    expect(hashTable.data.length).to.equal(2);

    const pairA = hashTable.data[0];
    const pairB = hashTable.data[1];

    expect(pairA.key).to.equal("key-1");
    expect(pairA.value).to.equal("val-1");

    expect(pairB.key).to.equal("key-2");
    expect(pairB.value).to.equal("val-2");

  });

  it('insert throws an error if hash collision occurs', () => {

    hashTable.insertNoCollisions("key-1", "val-1");
    hashTable.insertNoCollisions("key-2", "val-2");

    const errorMessage = 'hash collision or same key/value pair already exists!'
    // a hash collision
    expect(() => hashTable.insertNoCollisions("key-3", "val-3")).to.throw(Error, errorMessage);

  });

  it('insert throws an error if same key/value pair exists', () => {

    hashTable.insertNoCollisions("key-1", "val-1");
    hashTable.insertNoCollisions("key-2", "val-2");

    const errorMessage = 'hash collision or same key/value pair already exists!'
    // a same key/pair insert
    expect(() => hashTable.insertNoCollisions("key-2", "val-2")).to.throw(Error, errorMessage);

  });

});
