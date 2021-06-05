'use strict';

const Hashmap = require('../hashtable.js');

describe('Hashmap', () => {

  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let hashmap = new Hashmap(4000);
    hashmap.set('st.', 'vincent');
    let test = hashmap.contains('st.');
    expect(test).toEqual(true);
  });

  it('Retrieving based on a key returns the value stored', () => {
    let hashmap = new Hashmap(4000);
    hashmap.set('dua', 'lipa');
    let test = hashmap.get('dua');
    expect(test).toEqual([['dua', 'lipa']]);
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    let hashmap = new Hashmap(4000);
    hashmap.set('sharon', 'van etten');
    let test = hashmap.get('prince');
    expect(test).toEqual('no list');
  });

  it('Successfully handle a collision within the hashtable', () => {
    let hashmap = new Hashmap(4000);
    hashmap.set('big', 'theif');
    hashmap.set('big', 'boi');
    hashmap.set('big', 'star');
    let test = hashmap.get('big');
    expect(test).toEqual([ [ 'big', 'star' ], [ 'big', 'boi' ], [ 'big', 'theif' ] ]);
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let hashmap = new Hashmap(4000);
    hashmap.set('big', 'theif');
    hashmap.set('big', 'boi');
    hashmap.set('big', 'star');
    let test = hashmap.get('big');
    expect(test[1]).toEqual([ 'big', 'boi' ]);
  });

  it('Successfully hash a key to an in-range value', () => {
    let hashmap = new Hashmap(4000);
    let hash1 = hashmap.hash('king gizzard and the lizard wizard');
    let hash2 = hashmap.hash('sigur ros()');
    let hash3 = hashmap.hash('X');
    expect(hash1 < 4000).toBe(true);
    expect(hash2 < 4000).toBe(true);
    expect(hash3 < 4000).toBe(true);
  });

});
