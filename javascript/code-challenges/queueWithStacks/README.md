# Challenge 08 - Zipped List

## Challenge Summary

Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.

dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.


## Approach & Efficiency

To get our desired values, we push all values from stack 1 into stack 2 and that either push the value into the empty stack before moving stack 2 back into stack 1 (for enqueue), or popping off the top value of stack 2 (for dequeue).

## API

**enqueue(value) - pseudo code:**

while stack 1 has values in it:

  pop off all values and push them into stack 2

push (value) onto stack 1

while stack 2 has values in it:

  pop off all values and push them back into stack 1


**dequeue() - pseudo code:**

while stack 1 has values in it:

  pop values off stack 1 and push them into stack 2

return stack 2(pop)
