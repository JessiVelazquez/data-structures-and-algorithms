# Challenge 13 - Multi Bracket Validation

## Challenge Summary

A function that takes in a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}

## Approach & Efficiency

To solve this, we set a counter to 0, then iterate through the input string, increasing the counter if we see an open bracket, and if we see a close without an open, returning false - if we see a closer while having open brackets, we decrease the counter.

At the end, we return true if the counter is 0, and false if not.

## API

**multiBracketValidation - pseudo code:**

set counter to 0

iterate through string:

  if open bracket:

    increase counter

  if closing bracket:

    if counter = 0:

      return false

      else decrease counter

if counter = 0:

  return true

  else:

    return false
    
