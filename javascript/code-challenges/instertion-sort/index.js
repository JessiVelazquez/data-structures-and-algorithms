'use strict';

// let array = [8,4,23,42,16,15];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
};


module.exports = insertionSort;

// let answer = insertionSort(array);

// console.log(answer);



