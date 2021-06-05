# hash-tables

We have a node class, and linked list class, and a hashmap class. Data is added to the hashmap by hashing it's key into a number less than the size of the hashmap, which becomes it's index. This ensures that each time you look up data based on it's key (the get() function), that the code will return the correct index of the hash table.

Of course, collisions are possible, at which point we implement a linked list at the index value of the hashmap.

Tests: [Hashmap Tests](./__tests__/hashtable.test.js)

