const { expect } = require('chai');

const HashTable = require('../hash-table.js');


describe('Hash table insert with hash collisions', () => {

  let hashTable;

  beforeEach(function () {

    hashTable = new HashTable(2);

  });

  it('insert handles hash collisions with linked lists', () => {

    hashTable.insertWithHashCollisions("key-1", "val-1");
    hashTable.insertWithHashCollisions("key-2", "val-2");
    hashTable.insertWithHashCollisions("key-3", "val-3");

    expect(hashTable.count).to.equal(3);
    expect(hashTable.capacity).to.equal(2);
    expect(hashTable.data.length).to.equal(2);

    const pairC = hashTable.data[0];
    const pairB = hashTable.data[1];
    const pairA = hashTable.data[0].next;

    expect(pairA.key).to.equal("key-1");
    expect(pairA.value).to.equal("val-1");

    expect(pairB.key).to.equal("key-2");
    expect(pairB.value).to.equal("val-2");

    expect(pairC.key).to.equal("key-3");
    expect(pairC.value).to.equal("val-3");

  });

});
