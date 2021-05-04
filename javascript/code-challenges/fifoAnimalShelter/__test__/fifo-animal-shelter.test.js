'use strict';

//================IMPORTS================\\
const Stack = require('../lib/stacks.js');
const Queue = require('../lib/queue.js');
const Animal = require('../lib/animal.js');
const AnimalShelter = require('../lib/fifo-animal-shelter.js');


//==============STACK TESTS===============\\
describe('Stack', () => {

  it('should enqueue a dog or a cat into the correct queue', () => {
    let animalShelter = new AnimalShelter();
    let dog1 = new Animal('dog');
    let dog2 = new Animal('dog');

    let cat1 = new Animal('cat');
    let cat2 = new Animal('cat');

    let bear = new Animal('bear');

    animalShelter.enqueue(dog1);
    animalShelter.enqueue(dog2);
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(cat2);
    animalShelter.enqueue(bear);

    let dogResult = animalShelter.dogs.front.value;
    let catResult = animalShelter.cats.front.value;
    expect(dogResult.type).toEqual('dog');
    expect(catResult.type).toEqual('cat');
  });


  it('should not allow another animal type, like a bear, into either queue', () => {
    let animalShelter = new AnimalShelter();

    let bear = new Animal('bear');

    let result = animalShelter.enqueue(bear);

    expect(result).toEqual('Bears are too violent for this shelter!');
  });


  it('should dequeue a dog or a cat from the correct queue, or return null if another animal type is passed in', () => {
    let animalShelter = new AnimalShelter();
    let dog1 = new Animal('dog');
    let dog2 = new Animal('dog');

    let cat1 = new Animal('cat');
    let cat2 = new Animal('cat');

    animalShelter.enqueue(dog1);
    animalShelter.enqueue(dog2);
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(cat2);

    let dogResult = animalShelter.dequeue('dog').value;
    let catResult = animalShelter.dequeue('cat').value;
    let bearResult = animalShelter.dequeue('bear');

    expect(dogResult.type).toEqual('dog');
    expect(catResult.type).toEqual('cat');
    expect(bearResult).toEqual(null);
  });

});
