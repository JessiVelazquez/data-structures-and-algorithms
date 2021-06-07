'use strict';

// const Hashmap = require ('../hashtable/hashtable.js');

let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York';

// let hashTable = new Hashmap(4000);


//--------------HASH TABLE VERSION-------------\\
// function repeatedWord(str) {
//   let split = str.split(' ');
//   for (let i = 0; i < split.length; i++) {
//     hashTable.set(split[i].toLowerCase(), split[i]);
//   }
//   console.log(hashTable);
//   for (let j = 0; j < split.length; j++) {
//     let wordCount = hashTable.get(split[j]);
//     console.log(wordCount.length);
//   }
// }


//----------THIS LOGIC SHOULD WORK--------------\\
// split string into array.
// set up empty array
// compare word in split array to empty array
// if not in the empty array, push it in there
// if it is in there, return that word

// clean up with regex = (/(,)+|(!)+|(-)+|(\.)|(\?)/g, '')

function repeatedWord(str) {
  let array1 = [];
  let split = str.split(' ');
  for (let i = 0; i < split.length; i++) {
    array1.push(split[i]);
  }
  for (let i = 0; i < split.length; i++) {
    let wordCounter = 0;
    for (let j = 0; j < array1.length; j++) {
      if (split[i] === array1[j]) {
        wordCounter = wordCounter + 1;
      }
      if (wordCounter > 1) {
        return split[i];
      }
    }
  }
}

let answer = repeatedWord(string);

console.log(answer);

module.exports = repeatedWord;
