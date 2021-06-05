'use strict';

// Create node class

// Create Linked List class

// Add ability to add items to linked list


// Create hashmap class:
// will contain: size, storage mechanism (object or array)

// create hash function - generate number between 0 - (total size of array - 1)

// create set function - create new linked list with single item if adding something to array at index w/o collision
// (iff collision, we will be appending to a linked list at an index in the array)


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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
}

class Hashmap {
  // NEEDS:
  // predetermined storage mechanism size
  // need a storage mechanism (array)
  // constructor that creates a new storage mechanism when we make a new hashmap
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.split('').reduce((accumulator, current) => {
      return accumulator + current.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  //  set is to add a new key value pair in our hashmap. to do that we either a) create new lnked list with single item and put it in the proper index spot or b) append to a pre existing linked list, since we have a collision.


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

  //TODO:
  // get the item by a key. get(key) {}....... - takes a key, like "alex" below.
  // hint - if we can grab char code for every string item, it means we can also extract data from the key - reverse the hash function.

  get(key) {
    let hash = this.hash(key);
    let ll = this.storage[hash];
    if (ll === null) {
      return 'no list';
    } else {
      let current = ll.head;
      while(current) {
        console.log(current.val);
        current = current.next;
      }
    }
  }
}

let hashmap = new Hashmap(4000);

hashmap.set('jessi', 'velazquez');
hashmap.set('alex', 'johnson');
hashmap.set('alex', 'boberson');
hashmap.set('molly', 'myers');
hashmap.set('bob', 'smith');
hashmap.set('jessi', 'cooper');


hashmap.get('jessi');
