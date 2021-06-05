'use strict';

const hashMap = require('../hashmap.js');

describe('HashMap', () => {

  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let array = [8,4,23,42,16,15];
    let answer = quickSort(array, 0, array.length - 1);
    console.log(answer);
    expect(answer).toEqual([4,8,15,16,23,42]);
  });

  it('Retrieving based on a key returns the value stored', () => {

  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {

  });

  it('Successfully handle a collision within the hashtable', () => {

  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

  });

  it('Successfully hash a key to an in-range value', () => {

  });

});
