# Data Structures and Algorithms

See [setup instructions](https://codefellows.github.io/setup-guide/code-301/3-code-challenges), in the Code 301 Setup Guide.

## Repository Quick Tour and Usage

### 301 Code Challenges

Under the `data-structures-and-algorithms` repository, at the top level is a folder called `code-challenges`

Each day, you'll add one new file to this folder to do your work for the day's assigned code challenge

### 401 Data Structures, Code Challenges


# Challenge 02 - Array Shift

## Challenge Summary
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Challenge Description
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index..

## Approach & Efficiency
I took the approach of getting the middle index, then using a for loop with if/else if syntax to push numbers from the original array as well as the provided variable number into the new array at appropriate places.

## Solution
![Whiteboard Image](javascript/code-challenges/arrayShift/assets/array-shift.jpg)


# Challenge 03 - Array Binary Search

## Challenge Summary
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Challenge Description
The search algorithm used in your function should be a binary search.

## Approach & Efficiency
I wrote a function that sets the start and end of the array, then uses a while loop that takes the middle value, then determines if the key is greater or less than this middle value. if greater, we essentially cut the array in half, and run the same loop on the greater half of the array. If the key is smaller, we essentially cut the array down to the loower half and run it on that. We repeat this until we arrive at a place where key === middle value.

## Solution
![Whiteboard Image](javascript/code-challenges/arrayBinarySearch/assets/array-binary-search.jpg)
