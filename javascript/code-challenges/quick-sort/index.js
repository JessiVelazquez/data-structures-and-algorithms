'use strict';

let array = [8,4,23,42,16,15];

const quickSort = (arr, left, right) => {
  if (left < right) {
    let position = partition(arr, left, right);
    let posMinOne = position - 1;
    let posPlusOne = position + 1;
    quickSort(arr, left, posMinOne);
    quickSort(arr, posPlusOne, right);
  }
  return arr;
};

const partition = (arr, left, right) => {
  let pivot = arr[right];
  let low = left - 1;

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low = low + 1;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
};

const swap = (arr, i, low) => {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};

let answer = quickSort(array, 0, array.length - 1);

console.log(answer);

module.exports = quickSort;

