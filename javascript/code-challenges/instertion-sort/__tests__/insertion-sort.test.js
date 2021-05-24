'use strict';

const insertionSort = require('../index.js');

describe('Stack', () => {

  it('should sort an array least to greatest', () => {
    let array = [8,4,23,42,16,15];
    let answer = insertionSort(array);
    console.log(answer);
    expect(answer).toEqual([4,8,15,16,23,42]);
  });

});
