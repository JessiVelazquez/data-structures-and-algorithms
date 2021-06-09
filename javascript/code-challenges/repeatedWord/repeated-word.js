'use strict';

// const Hashmap = require ('../hashtable/hashtable.js');

let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York';

// let hashTable = new Hashmap(4000);


//--------------HASH TABLE VERSION-------------\\
// function repeatedWord(str) {
//   let regex = /(,)+|(!)+|(-)+|(\.)|(\?)/g;
//   let cleanStr = str.replace(regex, '');
//   let split = cleanStr.split(' ');
//   console.log(split);
//   for (let i = 0; i < split.length; i++) {
//     hashTable.set(split[i].toLowerCase(), split[i]);
//   }
//   for (let j = 0; j < split.length; j++) {
//     hashTable.get(split[j]);
//   }
// }

const repeatedWord = (str) => {
  if(!str) return null;
  let cleanStr = str.replace(/(,)+|(!)+|(-)+|(\.)|(\?)/g, '');
  let newArr = cleanStr.toLowerCase().split(' ');
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (newArr[i] === result[j]) {
        return `${newArr[i]} is the first repeated word`;
      }
    }
    result.push(newArr[i]);
  }
  return 'no repeating words';
};



//----------THIS LOGIC SHOULD WORK--------------\\
// split string into array.
// set up empty array
// compare word in split array to empty array
// if not in the empty array, push it in there
// if it is in there, return that word

// clean up with regex = (/(,)+|(!)+|(-)+|(\.)|(\?)/g, '')

// function repeatedWord(str) {
//   let array1 = [];
//   let split = str.split(' ');
//   for (let i = 0; i < split.length; i++) {
//     array1.push(split[i]);
//   }
//   for (let i = 0; i < split.length; i++) {
//     let wordCounter = 0;
//     for (let j = 0; j < array1.length; j++) {
//       if (split[i] === array1[j]) {
//         wordCounter = wordCounter + 1;
//       }
//       if (wordCounter > 1) {
//         return split[i];
//       }
//     }
//   }
// }

let answer = repeatedWord(string);

console.log(answer);

module.exports = repeatedWord;



