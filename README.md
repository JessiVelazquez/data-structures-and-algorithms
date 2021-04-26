# Data Structures and Algorithms

See [setup instructions](https://codefellows.github.io/setup-guide/code-301/3-code-challenges), in the Code 301 Setup Guide.

## Repository Quick Tour and Usage

### 301 Code Challenges

Under the `data-structures-and-algorithms` repository, at the top level is a folder called `code-challenges`

Each day, you'll add one new file to this folder to do your work for the day's assigned code challenge

### 401 Data Structures, Code Challenges


# Challenge 03 - Array Shift

## Challenge Summary
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Challenge Description
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index..

## Approach & Efficiency
I took the approach of getting the middle index, then using a for loop with if/else if syntax to push numbers from the original array as well as the provided variable number into the new array at appropriate places.

## Solution
![Whiteboard Image](javascript/code-challenges/arrayShift/assets/array-shift.jpg)


# Challenge 04 - Array Binary Search

## Challenge Summary
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Challenge Description
The search algorithm used in your function should be a binary search.

## Approach & Efficiency
I wrote a function that sets the start and end of the array, then uses a while loop that takes the middle value, then determines if the key is greater or less than this middle value. if greater, we essentially cut the array in half, and run the same loop on the greater half of the array. If the key is smaller, we essentially cut the array down to the loower half and run it on that. We repeat this until we arrive at a place where key === middle value.

## Solution
![Whiteboard Image](javascript/code-challenges/arrayBinarySearch/assets/array-binary-search.jpg)


# Challenge 05 - Linked List

## Challenge Summary
Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL".

## Approach & Efficiency
Methods were written within a linked list class (LL) to perform the linked list actions insert, includes() and toString. To perform these tasks, we used loops to traverse the linked list, doing the appropriate "thing" to the data, then returning the data.

## API

**Insert:**
Create a node
If head does not exist, set node to head
If head does exist, let the current node be the head
Traverse the linked list with while loop
When traverse is complete (current.next = NULL),
  set current.next = node we created at start of function

**Includes(value)**
set node to head
while more nodes exist:
  if current node value = value
    return true
    otherwise move to the next node
if while loop fails to find value; return false

**toString:**

set node to head
set result equal to empty string
while nodes exist:
  add node value to result string
  or, if node.next = NULL (no more nodes in list), add NULL to result list
  move to next node
return result string

  