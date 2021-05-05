'use strict';

// const Stack = require('./stacks.js');

function multiBracketValidation(input) {
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
      counter++;
    } else if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
      if (counter === 0) {
        return false;
      } else {
        counter--;
      }
    }
  }
  if (counter === 0) {
    return true;
  }
  return false;
}

module.exports = multiBracketValidation;
