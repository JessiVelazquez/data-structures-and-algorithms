# Challenge 05 - Linked List

## Challenge Summary
Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL".

## Approach & Efficiency
Methods were written within a linked list class (LL) to perform the linked list actions insert, includes() and toString. To perform these tasks, we used loops to traverse the linked list, doing the appropriate "thing" to the data, then returning the data.

## API

**Insert - pseudo code:**
Create a node
If head does not exist, set node to head
If head does exist, let the current node be the head
Traverse the linked list with while loop
When traverse is complete (current.next = NULL),
  set current.next = node we created at start of function

**Includes(value) - psuedo code:**
set node to head
while more nodes exist:
  if current node value = value
    return true
    otherwise move to the next node
if while loop fails to find value; return false

**toString - pseudo code:**

set node to head
set result equal to empty string
while nodes exist:
  add node value to result string
  or, if node.next = NULL (no more nodes in list), add NULL to result list
  move to next node
return result string



# Challenge 06 - Linked List Insertions

## Challenge Summary

Write Functions that:

.append(value) which adds a new node with the given value to the end of the list

.insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node

.insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Approach & Efficiency
Methods were written within a linked list class (LL) to perform the linked list actions append, insertBefore, insertAfter. To perform these tasks, we used loops to traverse the linked list, doing the appropriate "thing" to the data, then returning the data.

## API

**append - pseudo code:**
create new node
if list does not have head, set node to head
otherwise traverse the linked list
when reaching the end (!current.next):
  set currrent.next = node

**insertBefore(value, newVal) - pseudo code:**
create new node
if list does not have head, set node to head
otherwise traverse the linked list
if currrent node value = value
  set current to new node.next
continue traversing list
return list

**insertAfter(value, newVal) - pseudo code:**
create new node
if list does not have head, set node to head
otherwise traverse the linked list
if current node value = value
  set current.next to new node
continue traversing list
return list


# Challenge 07 - k from end of list

## Challenge Summary

Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency

Methods were written within a linked list class (LL) to perform the linked list actions append, insertBefore, insertAfter. To perform these tasks, we used loops to traverse the linked list, doing the appropriate "thing" to the data, then returning the data. In this case, we need to traverse the list twice to 1) get the total count of the list, and 2) to get the count from the start as total count - k.

## API

**k from end of list - pseudo code:**
set head of list
initialize total count to 0
traverse list
  get total count by increasing count by 1 with each node
set countFromStart = total count - k value
initialize result variable
set head of list again
initialize count2 to 0
traverse list again
  increase count2 by one with each node
  if countFromStart + 1 = count2
    return current node value
  contiinue to traverse list
return result
