# Challenge 08 - Zipped List

## Challenge Summary

Write a function called zipLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency

The zipLists() function was written as a method of the linked list class (LL), which also includes methods for append, insertBefore, insertAfter, toString, and kFromEnd. To perform the desired task, we use a while loop to traverse the linked list, doing the appropriate "thing" to the data, then returning the data. In this case, we are simultaneously traversing two linked lists

## API

**zipped list - pseudo code:**

instantiate new "zipped list"

set head of list 1

set head of list 2

while list 1 or list 2 has nodes:

  if list 1 has a node

    append node value to zipped list

    continue to next node

  if list 2 has a node

    append node value to zipped list

    continue to next node

return zipped list
  