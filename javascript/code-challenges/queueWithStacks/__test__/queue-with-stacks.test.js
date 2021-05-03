'use strict';

//================IMPORTS================\\
const Stack = require('../lib/stacks.js');
const Queue = require('../lib/queue.js');
const PseudoQueue = require('../lib/queue-with-stacks.js');

//==============STACK TESTS===============\\
describe('Stack', () => {

  it('should enqueue stacks into the pseudoqueue', () => {
    let pseudoQueue = new PseudoQueue();

    let first = 1;
    let second = 2;

    pseudoQueue.stack1.push(first);
    pseudoQueue.stack1.push(second);

    console.log('STACK1', pseudoQueue.stack1);
    console.log('STACK2', pseudoQueue.stack2);

    pseudoQueue.enqueue(5);
    let result = pseudoQueue.stack1.length;
    expect(result).toEqual(3);
  });

  it('should dequeue stacks from the pseudoqueue', () => {
    let pseudoQueue = new PseudoQueue();

    let first = 1;
    let second = 2;

    pseudoQueue.stack1.push(first);
    pseudoQueue.stack1.push(second);

    console.log('STACK1', pseudoQueue.stack1);
    console.log('STACK2', pseudoQueue.stack2);

    let result = pseudoQueue.dequeue().value.value;
    expect(result).toEqual(1);
  });

});
