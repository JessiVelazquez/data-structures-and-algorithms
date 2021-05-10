'use strict';

let Node = require('./node.js');

class BinaryTree {
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



  add(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const addNode = node => {
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
      if (value < current.value)addNode('left');
      else addNode('right');
    }
  }

}


module.exports = BinaryTree;

