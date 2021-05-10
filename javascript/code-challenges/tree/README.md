# Challenge 15 - Binary Tree and Binary Search Tree

## Challenge Summary

Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

Create a BinaryTree class:

- Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

Create a BinarySearchTree class:

- Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.

- Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

- Write an instance method called findMaximumValue(). Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.


## Approach & Efficiency

We use standard binary tree traversal functions for pre, in, and post methods. In these functions, we set an empty array, and return null if the tree has no root. But, if there is a root we walk left and then right, either pushing the root value to the array first (pre function), second (in function), or third (post function). Then, we call this same walk function the root node, which will be the new node we are on, so this will continue to push node values to the array as we move further down the levels of the tree.

We also have an add(value) function and a contains(value) function. For the add value function, we set a new node with the value passed in, and then establish the root of the tree as current node, then call the same add function on the current node.

In our contains(value) function, we set the root value to current, and establish doesContain as false. We then have a while loop that runs as long as there is a current root and we have not yet found the contains value. In this loop, we check left if the value is less than current, and right if it is greater, doing this until we have found the container, at which point we return true. If we traverse the entire tree without finding the value, we return false.

To find maximum value in a binary tree, we run the preOrder() function on the tree to get an array of the tree's values. We then use a for loop to iterate through the array, comparing the current value to the maximum value, before returning the maximum value at the end.

## API

**preOrder() - pseudo code:**

if there is no root of the tree, return null

set empty array

start at root node:

  push value to array

  if there is a left node, move left

  if there is a right node, move right

start at new root node, repeat ^above^ until we reach a leaf

start over at top root

return results

**inOrder() - pseudo code:**

if there is no root of the tree, return null

set empty array

start at root node:

  if there is a left node, move left

  push value to array

  if there is a right node, move right

start at new root node, repeat ^above^ until we reach a leaf

start over at top root

return results

**preOrder() - pseudo code:**

if there is no root of the tree, return null

set empty array

start at root node:

  if there is a left node, move left

  if there is a right node, move right

  push value to array

start at new root node, repeat ^above^ until we reach a leaf

start over at top root

return results

**addNode(value) - pseudo code:**

establish new Node at value passed in

if there is no root in the tree, set new Node to root and return, otherwise:

  set current to root

if current does not exist

  set current to new node

  return tree

traverse tree

  if value === current.value

    return tree

  if value is less than current, add node as left

  if value is greater than current, add value as right

**contains(value) - pseudo code:**

if there is no root of the tree, return null

set current to root

  set doesContain to false

while there are nodes and we have not found the value in the tree yet:

  if value is less than current, move left

  if value is greater than current, move right

  if value is equal to current, doesContain = true

if we never found the value, return false


**findMaximumValue(tree) - pseudo code:**

set array variable = preOrder() of tree

establish maximum value variable set to 0

for loop throughi array:

  compare each value to current maximum, if larger, reset maximum to current value

return maximum
