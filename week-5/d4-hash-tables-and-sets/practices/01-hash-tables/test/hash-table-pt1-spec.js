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

});


describe('Hash table methods', () => {

  let hashTable;

  beforeEach(function () {

    hashTable = new HashTable(2);

  });

  it('hash method returns first 8 characters of sha256 hash as an integer', () => {

    // First 8 digits of sha256("A") are 0x559aead0
    expect(hashTable.hash("A")).to.equal(1436216016);

    // First 8 digits of sha256("B") are 0xdf7e70e
    expect(hashTable.hash("B")).to.equal(3749605605);

    // First 8 digits of sha256("C") are 0x6b23c0d5
    expect(hashTable.hash("C")).to.equal(1797505237);

    // First 8 digits of sha256("ABC") are 0xb5d4045c
    expect(hashTable.hash("ABC")).to.equal(3050570844);

    // First 8 digits of sha256("hello world") are 0xb94d27b9
    expect(hashTable.hash("hello world")).to.equal(3108841401);

  });

  it('hashMod method returns the hash value modulo the number of buckets', () => {

    // 2 buckets
    expect(hashTable.hashMod("A")).to.equal(0);
    expect(hashTable.hashMod("B")).to.equal(1);
    expect(hashTable.hashMod("C")).to.equal(1);
    expect(hashTable.hashMod("ABC")).to.equal(0);

    expect(hashTable.hashMod("hello world")).to.equal(1);

    // 10 buckets
    hashTable = new HashTable(10);
    expect(hashTable.hashMod("A")).to.equal(6);
    expect(hashTable.hashMod("B")).to.equal(5);
    expect(hashTable.hashMod("C")).to.equal(7);
    expect(hashTable.hashMod("ABC")).to.equal(4);

    expect(hashTable.hashMod("hello world")).to.equal(1);

  });

});
