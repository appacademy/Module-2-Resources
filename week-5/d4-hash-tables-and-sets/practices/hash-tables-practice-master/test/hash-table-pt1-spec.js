const { expect } = require('chai');

const HashTable = require('../hash-table.js');

describe('Hash table constructor', () => {

  let hashTable;

  beforeEach(function () {

    hashTable = new HashTable(2);

  });

  it('has count, capacity and data properties', () => {

    expect(hashTable.count).to.equal(0);
    expect(hashTable.capacity).to.equal(2);
    expect(hashTable.data instanceof Array).to.be.true;
    expect(hashTable.data.length).to.equal(2);

    expect(hashTable.data[0]).to.equal(null);
    expect(hashTable.data[1]).to.equal(null);

  });

  it('can initialize to different sizes', () => {

    hashTable = new HashTable(4);

    expect(hashTable.count).to.equal(0);
    expect(hashTable.capacity).to.equal(4);
    expect(hashTable.data instanceof Array).to.be.true;
    expect(hashTable.data.length).to.equal(4);

    expect(hashTable.data[0]).to.equal(null);
    expect(hashTable.data[1]).to.equal(null);
    expect(hashTable.data[2]).to.equal(null);
    expect(hashTable.data[3]).to.equal(null);

  });


  it('can initialize to different sizes', () => {

    hashTable = new HashTable(2);

    expect(hashTable.count).to.equal(0);
    expect(hashTable.capacity).to.equal(2);
    expect(hashTable.data instanceof Array).to.be.true;
    expect(hashTable.data.length).to.equal(2);

    expect(hashTable.data[0]).to.equal(null);
    expect(hashTable.data[1]).to.equal(null);

  });


});

