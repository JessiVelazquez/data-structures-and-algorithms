'use strict';

//-------------NODE CLASS---------\\
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//------------LINKED LIST CLASS---------\\
class LL {
  constructor() {
    this.head = null;
  }

  add(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getList() {
    if (!this.head) return 'no list';
    let current = this.head;
    while(current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

//------------HASHMAP CLASS----------------\\
class Hashmap {
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) {
    let count = 1;
    return key.split('').reduce((accumulator, current) => {
      count = count + 1;
      return accumulator + (current.charCodeAt(0) * count);
    }, 0) * 19 % this.size;
  }

  contains(key) {
    let hash = this.hash(key);
    if (this.storage[hash]) {
      return true;
    } else {
      return false;
    }
  }

  set(key, val) {
    let hash = this.hash(key);

    if(!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll;
    } else {
      let data = [key, val];
      this.storage[hash].add(data);
    }
  }

  get(key) {
    let bucket = [];
    let hash = this.hash(key);
    let ll = this.storage[hash];
    if (!this.storage[hash]) {
      return 'no list';
    } else {
      let current = ll.head;
      while(current) {
        bucket.push(current.val);
        current = current.next;
      }
      return bucket;
    }
  }
}

//------------EXECUTABLE--------------\\

// let hashmap = new Hashmap(4000);

// hashmap.set('jessi', 'velazquez');
// hashmap.set('alex', 'johnson');
// hashmap.set('alex', 'boberson');
// hashmap.set('alex', 'rodriguez');
// hashmap.set('molly', 'molecule');
// hashmap.set('bob', 'smith');
// hashmap.set('jessi', 'cooper');
// hashmap.set('dog', 'theBountyHunter');
// hashmap.set('god', 'dammit');


// console.log(hashmap.get('alex'));

module.exports = Hashmap;


