'use strict';

const Hashmap = require('../../hashtable/hashtable.js');
const leftJoin = require('../left-join.js');

describe('Left Join', () => {

  it('Should perform Left Join on Two Hashmaps', () => {
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

    let answer = leftJoin(syn, ant);
    console.log(answer);
    expect(answer).toEqual([[ 'wrath', 'anger', 'delight' ], [ 'fond', 'enamored', 'averse' ], [ 'diligent', 'employed', 'idle' ], [ 'guide', 'usher', 'follow' ]]);

  });
});



