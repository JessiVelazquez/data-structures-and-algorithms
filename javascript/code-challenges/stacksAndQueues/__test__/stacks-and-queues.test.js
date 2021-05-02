'use strict';

//================IMPORTS================\\
const Stack = require('../lib/stacks.js');
const Queue = require('../lib/queue.js');

//==============STACK TESTS===============\\
describe('Stack', () => {

  it('should instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.top).toEqual(null);
  });

  it('should push a node to a new stack', () => {
    let stack = new Stack();
    let first = 1;

    stack.push(first);
    expect(stack.top.value).toEqual(1);
  });

  it('should push multiple nodes onto a new stack', () => {
    let stack = new Stack();
    let first = 1;
    let second = 2;

    stack.push(first);
    stack.push(second);
    expect(stack.top.value).toEqual(2);
  });

  it('should pop off the top of the stack', () => {
    let stack = new Stack();
    let first = 1;
    let second = 2;
    let third = 3;
    let fourth = 4;

    stack.push(first);
    stack.push(second);
    stack.push(third);
    stack.push(fourth);
    stack.pop();
    expect(stack.top.value).toEqual(3);
  });

  it('should empty a stack after multiple pops', () => {
    let stack = new Stack();
    let first = 1;
    let second = 2;
    let third = 3;
    let fourth = 4;

    stack.push(first);
    stack.push(second);
    stack.push(third);
    stack.push(fourth);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('should peek the top value of a stack', () => {
    let stack = new Stack();
    let first = 1;
    let second = 2;

    stack.push(first);
    stack.push(second);
    expect(stack.peek()).toEqual(2);
  });

  it('should raise exception calling pop or peek on empty stack', () => {
    let stack = new Stack();
    expect(stack.pop()).toEqual(null);
    expect(stack.peek()).toEqual(null);
  });

});

//==============QUEUE TESTS===============\\
describe('Queue', () => {

  it('can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.front).toEqual(null);
  });

  it('can successfully enqueue into a queue', () => {
    let queue = new Queue();
    let first = 1;

    queue.enqueue(first);
    expect(queue.front.value).toEqual(1);
    expect(queue.rear.value).toEqual(1);
  });

  it('can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    let first = 1;
    let second = 2;
    let third = 3;

    queue.enqueue(first);
    queue.enqueue(second);
    queue.enqueue(third);
    expect(queue.front.value).toEqual(1);
    expect(queue.rear.value).toEqual(3);
  });

  it('can dequeue expected value from a queue', () => {
    let queue = new Queue();
    let first = 1;
    let second = 2;
    let third = 3;

    queue.enqueue(first);
    queue.enqueue(second);
    queue.enqueue(third);
    queue.dequeue();
    expect(queue.front.value).toEqual(2);
  });

  it('can empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    let first = 1;
    let second = 2;
    let third = 3;

    queue.enqueue(first);
    queue.enqueue(second);
    queue.enqueue(third);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toEqual(null);
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    let first = 1;
    let second = 2;
    let third = 3;

    queue.enqueue(first);
    queue.enqueue(second);
    queue.enqueue(third);
    expect(queue.peek()).toEqual(1);
  });

  it('should raise exception calling pop or peek on empty queue', () => {
    let queue = new Queue();
    expect(queue.dequeue()).toEqual(null);
    expect(queue.peek()).toEqual(null);
  });

});


