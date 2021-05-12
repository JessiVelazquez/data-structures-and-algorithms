# Challenge 18 - FizzBuzz

## Challenge Summary

Write a function called FizzBuzzTree which takes a k-ary tree as an argument.

Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:

- If the value is divisible by 3, replace the value with “Fizz”

- If the value is divisible by 5, replace the value with “Buzz”

- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”

- If the value is not divisible by 3 or 5, simply turn the number into a String.

Return a new tree.


## Approach & Efficiency

Here we have a Big O notation of O(n), because we must evaluate each node in the tree.

We return null if the tree has no root. Otherwise, we instantiate the results variable and set it equal to the tree we pass in to the function, so we can work with it.

We enter a recursive traversal function (_walk) that is essentially the preOrder() traversal function with a series of conditional statements in place of the results.push line. In these conditionals, we evaluate whether the node value is divisible by 3, 5, or both, and reassign the value to "Fizz", "Buzz", or "FizzBuzz" as needed. 

After the conditionals, we again call the recusive _walk function on the root, which will run the conditionals on the next node value.

At the end, we return results.

In our test, we run a preOrder() function on the results to get an array of our result values.

## API

**fizzBuzzTree() - pseudo code:**

if tree has no root, return null

results = tree (passed in to function)

Recursive _walk function:

  if node value/3 & 5, node value = FizzBuzz

  if node value/5, node value = Buzz

  if node value/3, node value = Fizz

Recursive _walk called again on root

return results
