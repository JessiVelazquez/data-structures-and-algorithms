'use strict';

const BT = require('../binary-tree.js');
const BST = require('../binary-search-tree.js');

describe('BINARY TREE TESTS', () => {

  it('can instantiate an empty binary tree', () => {
    let tree = new BT();
    expect(tree.preOrder()).toEqual(null);
  });

  it('can instantiate a binary tree with a single root node', () => {
    let tree = new BT();
    tree.add(3);
    expect(tree.root.value).toEqual(3);
  });

  it('can add a left child and right child to a single root node', () => {
    let tree = new BT();
    tree.add(5);
    tree.add(4);
    tree.add(6);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left.value).toEqual(4);
    expect(tree.root.right.value).toEqual(6);
  });

});
