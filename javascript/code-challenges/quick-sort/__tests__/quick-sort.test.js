'use strict';

const quickSort = require('../index.js');

describe('Quick Sort', () => {

  it('should sort an array least to greatest', () => {
    let array = [8,4,23,42,16,15];
    let answer = quickSort(array, 0, array.length - 1);
    console.log(answer);
    expect(answer).toEqual([4,8,15,16,23,42]);
  });


  it('reverse-sorted', () => {
    let array = [20,18,12,8,5,-2];
    let answer = quickSort(array, 0, array.length - 1);
    console.log(answer);
    expect(answer).toEqual([-2,5,8,12,18,20]);
  });

  it('few uniques', () => {
    let array = [5,12,7,5,5,7];
    let answer = quickSort(array, 0, array.length - 1);
    console.log(answer);
    expect(answer).toEqual([5,5,5,7,7,12]);
  });

  it('nearly sorted', () => {
    let array = [2,3,5,7,13,11];
    let answer = quickSort(array, 0, array.length - 1);
    console.log(answer);
    expect(answer).toEqual([2,3,5,7,11,13]);
  });

});
