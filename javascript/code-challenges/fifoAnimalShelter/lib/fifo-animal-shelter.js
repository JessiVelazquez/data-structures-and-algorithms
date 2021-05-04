'use strict';

const Node = require('./node.js');
const Queue = require('./queue.js');
const Stack = require('./stacks.js');
const Animal = require('./animal.js');


class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'dog') {
      this.dogs.enqueue(animal);
    }
    if (animal.type === 'cat') {
      this.cats.enqueue(animal);
    } else {
      return ('Bears are too violent for this shelter!');
    }
  }

  dequeue(pref) {
    if(pref === 'dog') {
      this.dogs.dequeue();
      return this.dogs.dequeue();
    }
    if(pref === 'cat') {
      this.cats.dequeue();
      return this.cats.dequeue();
    } else {
      return null;
    }
  }
}




module.exports = AnimalShelter;
