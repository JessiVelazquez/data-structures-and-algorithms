'use strict';

const Node = require('./node.js');

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    if(!this.root) return null;
    let results = [];
    let _walk = node => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    if(!this.root) return null;
    let results = [];
    let _walk = node => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    if(!this.root) return null;
    let results = [];
    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  // add(value) {
  //   let node = new Node(value);
  //   let _insert = (current, node) => {
  //     if (node.value < current.value)
  //   }
  // }

}

module.exports = BinarySearchTree;
