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
    tree.addNode(3);
    expect(tree.root.value).toEqual(3);
  });

  it('can add a left child and right child to a single root node', () => {
    let tree = new BT();
    tree.addNode(5);
    tree.addNode(4);
    tree.addNode(6);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left.value).toEqual(4);
    expect(tree.root.right.value).toEqual(6);
  });

  it('can successfully return a collection from a preorder, inorder, and postorder traversal', () => {
    let tree = new BT();
    tree.addNode(1);
    tree.addNode(2);
    tree.addNode(3);
    tree.addNode(4);
    tree.addNode(5);
    tree.addNode(6);
    // console.log('PRE', tree.preOrder());
    // console.log('IN', tree.inOrder());
    // console.log('POST', tree.postOrder());
    expect(tree.preOrder()).toEqual([1,2,3,4,5,6]);
    expect(tree.inOrder()).toEqual([1,2,3,4,5,6]);
    expect(tree.postOrder()).toEqual([6,5,4,3,2,1]);
  });

  it('should return true if value is contained in tree or false if not', () => {
    let tree = new BT();
    tree.addNode(1);
    tree.addNode(2);
    tree.addNode(3);
    tree.addNode(4);
    tree.addNode(5);
    tree.addNode(6);
    expect(tree.contains(2)).toEqual(true);
    expect(tree.contains(8)).toEqual(false);
  });

});

describe('BINARY SEARCH TREE TESTS', () => {

  it('can instantiate an empty binary search tree', () => {
    let tree = new BST();
    expect(tree.preOrder()).toEqual(null);
  });

  it('can instantiate a binary search tree with a single root node', () => {
    let tree = new BST();
    tree.addNode(3);
    expect(tree.root.value).toEqual(3);
  });

  it('can add a left child and right child to a single root node', () => {
    let tree = new BST();
    tree.addNode(5);
    tree.addNode(4);
    tree.addNode(6);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left.value).toEqual(4);
    expect(tree.root.right.value).toEqual(6);
  });

  it('can successfully return a collection from a preorder, inorder, and postorder traversal', () => {
    let tree = new BST();
    tree.addNode(1);
    tree.addNode(2);
    tree.addNode(3);
    tree.addNode(4);
    tree.addNode(5);
    tree.addNode(6);
    // console.log('PRE', tree.preOrder());
    // console.log('IN', tree.inOrder());
    // console.log('POST', tree.postOrder());
    expect(tree.preOrder()).toEqual([1,2,3,4,5,6]);
    expect(tree.inOrder()).toEqual([1,2,3,4,5,6]);
    expect(tree.postOrder()).toEqual([6,5,4,3,2,1]);
  });

  it('should return true if value is contained in tree or false if not', () => {
    let tree = new BST();
    tree.addNode(1);
    tree.addNode(2);
    tree.addNode(3);
    tree.addNode(4);
    tree.addNode(5);
    tree.addNode(6);
    expect(tree.contains(2)).toEqual(true);
    expect(tree.contains(8)).toEqual(false);
  });

});
