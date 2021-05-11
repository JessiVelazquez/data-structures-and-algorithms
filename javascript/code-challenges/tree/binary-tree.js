'use strict';

let Node = require('./node.js');
let Queue = require('./queue.js');

class BinaryTree {
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

    let _walkAdd = (current, newNode) => {
      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;
        } else {
          _walkAdd(current.left, newNode);
        }
      } else {
        if (!current.right) {
          current.right = newNode;
        } else {
          _walkAdd(current.right, newNode);
        }
      }
    };
    if (!this.root) {
      this.root = newNode;
    } else {
      _walkAdd(this.root, newNode);
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

  findMaximumValue(tree) {
    let array = this.preOrder(tree);
    let max = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }

  breadthFirst() {
    let queue = new Queue();
    let array = [];
    let current = this.root;
    queue.enqueue(current);
    while(queue.peek()) {
      current = queue.dequeue().value;
      array.push(current.value);
      if (current.left) {
        queue.enqueue(current.left);
      }
      if (current.right) {
        queue.enqueue(current.right);
      }
    }
    return array;
  }

}


module.exports = BinaryTree;

