'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    if (!this.front) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
      this.length++;
    } else {
      this.rear.next = node;
      this.rear = node;
      this.length++;
    }
  }

  dequeue() {
    if (this.isEmpty() === true) {
      return null;
    } else {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  peek() {
    if (this.isEmpty() === true) {
      return null;
    } else {
      return this.front.value;
    }
  }

}

module.exports = Queue;
