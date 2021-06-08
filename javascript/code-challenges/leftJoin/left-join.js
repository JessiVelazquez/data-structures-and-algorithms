'use strict';

const Hashmap = require('../hashtable/hashtable.js');

let syn = new Hashmap(1024);
let ant = new Hashmap(1024);

syn.set('fond', 'enamored');
syn.set('wrath', 'anger');
syn.set('diligent', 'employed');
syn.set('outfit', 'garb');
syn.set('guide', 'usher');
ant.set('fond', 'averse');
ant.set('wrath', 'delight');
ant.set('diligent', 'idle');
ant.set('guide', 'follow');
ant.set('flow', 'jam');


function leftJoin(hashmap1, hashmap2) {
  let answer = [];
  for (let i = 0; i < hashmap1.storage.length; i++) {
    if (hashmap1.storage[i]) {
      let arr = hashmap1.storage[i].head.val;
      let key = hashmap1.storage[i].head.val[0];
      for (let j = 0; j < hashmap2.storage.length; j++) {
        if (hashmap2.storage[j]) {
          if (key === hashmap2.storage[j].head.val[0]) {
            let antValue = hashmap2.storage[j].head.val[1];
            arr.push(antValue);
            answer.push(arr);
          }
        }
      }
    }
  }
  return answer;
}

let answer = leftJoin(syn, ant);

console.log(answer);

module.exports = leftJoin;
