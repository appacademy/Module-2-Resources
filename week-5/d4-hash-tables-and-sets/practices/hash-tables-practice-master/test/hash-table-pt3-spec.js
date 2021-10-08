const { expect } = require('chai');

const HashTable = require('../hash-table.js');


describe('Hash table insert no collisions', () => {

  let hashTable;

  beforeEach(function () {

    hashTable = new HashTable(2);

  });

  it('can insert a value without collisions', () => {

    hashTable.insert("key-1", "val-1");
    hashTable.insert("key-2", "val-2");

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


});

