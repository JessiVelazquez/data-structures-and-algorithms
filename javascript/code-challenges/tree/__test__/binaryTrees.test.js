'use strict';

const BT = require('../binary-tree.js');
const BST = require('../binary-search-tree.js');

describe('BINARY TREE TESTS', () => {

  it('can instantiate an empty binary tree', () => {
    let tree = new BT();
    expect(tree.root).toEqual(null);
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

  it('can successfully return a collection from a preorder, inorder, and postorder traversal', () => {
    let tree = new BT();
    tree.add(7);
    tree.add(2);
    tree.add(4);
    tree.add(5);
    tree.add(1);
    tree.add(9);
    expect(tree.preOrder()).toEqual([7,2,1,4,5,9]);
    expect(tree.inOrder()).toEqual([1,2,4,5,7,9]);
    expect(tree.postOrder()).toEqual([1,5,4,2,9,7]);
  });

  it('should return true if value is contained in tree or false if not', () => {
    let tree = new BT();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(6);
    expect(tree.contains(2)).toEqual(true);
    expect(tree.contains(8)).toEqual(false);
  });

  it('should find the maximum value in a binary tree', () => {
    let tree = new BT();
    tree.add(5);
    tree.add(9);
    tree.add(2);
    tree.add(13);
    tree.add(4);
    tree.add(8);
    expect(tree.findMaximumValue()).toEqual(13);
  });

  it('should perform a breadth first traversal of a binary tree and return an array of the values in expected order', () => {
    let tree = new BT();
    tree.add(5);
    tree.add(9);
    tree.add(2);
    tree.add(13);
    tree.add(4);
    tree.add(8);
    console.log('BREADTH--------', tree.breadthFirst());
    expect(tree.breadthFirst()).toEqual([5,2,9,4,8,13]);
  });

});

describe('BINARY SEARCH TREE TESTS', () => {

  it('can instantiate an empty binary search tree', () => {
    let tree = new BST();
    expect(tree.root).toEqual(null);
  });

  it('can instantiate a binary search tree with a single root node', () => {
    let tree = new BST();
    tree.add(3);
    expect(tree.root.value).toEqual(3);
  });

  it('can add a left child and right child to a single root node', () => {
    let tree = new BST();
    tree.add(5);
    tree.add(4);
    tree.add(6);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left.value).toEqual(4);
    expect(tree.root.right.value).toEqual(6);
  });

  it('can successfully return a collection from a preorder, inorder, and postorder traversal', () => {
    let tree = new BST();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(6);
    // console.log('PRE', tree.preOrder());
    // console.log('IN', tree.inOrder());
    // console.log('POST', tree.postOrder());
    expect(tree.preOrder()).toEqual([1,2,3,4,5,6]);
    expect(tree.inOrder()).toEqual([1,2,3,4,5,6]);
    expect(tree.postOrder()).toEqual([6,5,4,3,2,1]);
  });

  it('should return true if value is contained in tree or false if not', () => {
    let tree = new BST();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(6);
    expect(tree.contains(2)).toEqual(true);
    expect(tree.contains(8)).toEqual(false);
  });

});
