# Challenge 12 - 

## Challenge Summary

Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

Implement the following methods:

enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.

dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.


## Approach & Efficiency

We utilize an Animal class with the property of "type", and an AnimalShelter class with two queues in it's constructor for dogs and cats, and functions for enqueue and dequeue. We pass the animal object from the animal class into the functions, and utilize if/else statements to determine based on the animal object's "type", whether to enqueue or dequeue from the dogs or cats queue. To do so, we import our basic queue functions from queue.js and call them within the AnimalShelter class methods for enqueue and dequeue.

## API

**enqueue(value) - pseudo code:**

if dog:

  enqueue animal into dogs queue

if cat:

  enqueue animal into cats queue

else:

  tell them no bears allowed at the shelter


**dequeue() - pseudo code:**

if pref = dog:

  dequeue from dogs queue

if pref = cat:

  dequeue from cats queue

else:

  return null
