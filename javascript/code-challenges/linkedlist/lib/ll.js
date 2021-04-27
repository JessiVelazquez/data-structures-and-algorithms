'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value); // adds first node to list
    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head; // start traversing at head
      while(current.next) { // while more nodes exist in list
        current = current.next; // go to the next node
      }
      current.next = node;
    }
    return this;
  }

  includes(value) {
    let node = this.head;
    while(node) {
      if(node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  toString() {
    let node = this.head;
    let result = '';
    while(node) {
      result = result + `{ ${node.value} } -> `
      if (node.next === null){ result = result + `NULL`}
      node = node.next;
    }
    return result;
  }

  append(value) {
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  insertBefore(value, newVal) {
    let node = new Node(newVal);
    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        if(current.value === value) {
          current = node.next;
        }
        current = current.next;
      }
      return this;
    }
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        if(current.value === value) {
          current.next = node;
        }
        current = current.next;
      }
      return this;
    }
  }

  kFromEnd(k) {
    let node = this.head;
    let count = 0;
    while(node) {
      count = count + 1;
      node = node.next;
    }
    let countFromStart = count - k;
    let result = null;
    let current = this.head;
    let count2 = 0;
    while(current.next) {
      count2 = count2 + 1;
      if ((countFromStart + 1) === count2) {
        result = current.value;
      }
      current = current.next;
    }
    return result;
  }
}

module.exports = LinkedList;
