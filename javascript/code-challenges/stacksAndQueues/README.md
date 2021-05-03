# Challenge 10 - Stacks and Queues

## Challenge Summary

Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

Create a Stack class that has a top property. It creates an empty Stack when instantiated. This object should be aware of a default empty value assigned to top when the stack is created.

Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.

Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value. Should raise exception when called on empty stack.

Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack. Should raise exception when called on empty stack.

Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.

Create a Queue class that has a front property. It creates an empty Queue when instantiated. This object should be aware of a default empty value assigned to front when the queue is created.

Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value. Should raise exception when called on empty queue.

Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue. Should raise exception when called on empty queue.

Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency

Methods were written inside of Stack and Queue classes inside stacks.js and queue.js. Inside both of these classes, we have a constructor that instantiates a new stack or queue with the appropriate references (top for stack, front and rear for queue). We utilize temp nodes to retrieve values as needed, and use reassigning of front, rear, or top and next (for stacks) to perform the desired actions.

## File Architecture

Stacks and Queues
├── __test__
│   └── stacks-and-queues.test.js
├── index.js
├── lib
│   ├── node.js
│   ├── queue.js
│   └── stacks.js
└── package.json

## API

**Stacks - pseudo code:**

**Push**

Instantiate new node(value)

if top is null, set node to top and increase length, else:

  node.next = top

  top = node

  increase length

**Pop**

if stack is empty, return null. Else:

  temp = top

  top = top.next

  temp.next = null

  decrease length

  return temp

**Peek**

if stack is empty, return null. else:

  return value of top node


**Queues - psuedo code:**

**Enqueue**

instantiate new node

if queue has no front:

  front = new node

  rear = new node

else:

  rear.next = node

  rear = node

  increase length

**Dequeue**

if queue is empty, return null.

Else:

  temp = front

  front = front.next

  temp.next = null

  decrese length

  return temp

**Peek**

if queue is empty, return null.

Else:

  return front.value
