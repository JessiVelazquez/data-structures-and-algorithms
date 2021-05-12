'use strict';

const fizzBuzzTree = (tree) => {
  if(!tree.root) return null;
  let results = tree;

  let _walk = node => {
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    } else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    } else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    }
    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  };
  _walk(results.root);
  return results;
};

module.exports = fizzBuzzTree;

