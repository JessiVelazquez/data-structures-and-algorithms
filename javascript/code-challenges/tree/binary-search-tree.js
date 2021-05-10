'use strict';

const Node = require('./node.js');

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
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
    let results = [];
    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  add(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const add = node => {
      if(!current[node]) {
        current[node] = newNode;
        return this;
      }
      current = current[node];
    };
    while (true) {
      if (value === current.value) {
        return this;
      }
      if (value < current.value)add('left');
      else add('right');
    }
  }

  contains(value) {
    if (!this.root) return null;
    let current = this.root,
      doesContain = false;

    while (current && !doesContain) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else doesContain = true;
    }
    if (!doesContain) return false;
    return doesContain;
  }

}

module.exports = BinarySearchTree;
