'use strict';

const BST = require('../../tree/binary-search-tree.js');
const fizzBuzzTree = require('../fizz-buzz-tree.js');

describe('FizzBuzz Test', () => {

  it('should test that values in tree divisible by 3 are changed to Fizz, values divisible by 5 are changed to Buzz, and values divisible by both are changed to FizzBuzz', () => {

    let tree = new BST();
    tree.add(10);
    tree.add(6);
    tree.add(11);
    tree.add(30);
    tree.add(18);
    tree.add(5);
    let answer = fizzBuzzTree(tree).preOrder();
    expect(answer).toEqual(['Buzz', 'Fizz', 'Buzz', 11, 'FizzBuzz', 'Fizz']);
  });

});
