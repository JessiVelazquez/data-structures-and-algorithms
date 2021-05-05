'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    } else
      return false;
  }

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      this.length++;
    } else {
      node.next = this.top;
      this.top = node;
      this.length++;
    }
  }

  pop() {
    if (this.isEmpty() === true) {
      return null;
    } else {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  peek() {
    if (this.isEmpty() === true) {
      return null;
    } else {
      return this.top.value;
    }
  }

}

module.exports = Stack;
