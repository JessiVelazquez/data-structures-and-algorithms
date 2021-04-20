'use strict';

const insertShiftArray = (arr, num) => {
  let insertIndex = Math.ceil(arr.length/2);
  let arrayTwo = [];
  for (let j = 0; j <= arr.length; j++) {
    if (j < insertIndex) {
      arrayTwo.push(arr[j]);
    } else if (j === insertIndex) {
      arrayTwo.push(num);
    } else if (j > insertIndex) {
      arrayTwo.push(arr[j-1]);
    }
  }
  return arrayTwo;
};

module.exports = insertShiftArray;
