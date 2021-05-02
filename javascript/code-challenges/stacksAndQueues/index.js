'use strict';

const Stack = require('./lib/stacks.js');
const Queue = require('./lib/queue.js');

let stack = new Stack();
// let queue = new Queue();


//============PUSH===============\\
console.log('EMPTY STACK', stack);

stack.push(1);
console.log('SINGLE NODE STACK', stack);

stack.push(2);
console.log('2 NODE STACK', stack);

console.log('PEEK', stack.peek());

//============POP===============\\
stack.pop();
console.log('1 NODE STACK', stack);

stack.pop();
console.log('EMPTY STACK', stack);


