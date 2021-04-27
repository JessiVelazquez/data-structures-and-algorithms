'use strict';

const LL = require('../lib/ll.js');

describe('Linked List', () => {
  it('should successfully instantiate an empty linked list', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should properly insert into the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.insert(first);
    expect(list.head.value).toEqual(1);

    list.insert(second);
    list.insert(3);
    list.insert(4);

    console.log(list);
  });

  it('should show head points to first node in list', () => {
    let list = new LL(); // starts new linked list
    let first = 1; // sets variable value to 1
    let second = 2; // sets variable value to 2
    list.insert(first); // creates first node, sets value to variable 'first'
    list.insert(second); // creates second node, sets value to variable 'first'

    expect(list.head.value).toEqual(1); // tests value of head node
  });

  it('should show properly inserting multiple nodes into the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;
    list.insert(first);
    list.insert(second);
    list.insert(third);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
  });

  it('will return true when finding a value that exists in the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    list.insert(first);
    list.insert(second);
    expect(list.includes(2)).toBe(true);
  });

  it('will return false when searching for non existing node value', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    list.insert(first);
    list.insert(second);
    expect(list.includes(3)).toBe(false);
  });

  it('can properly return a collection of all the values in linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;
    list.insert(first);
    list.insert(second);
    list.insert(third);
    expect(list.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });


  it('can properly append a node to the end of the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.append(first);
    list.append(second);
    expect(list.head.next.value).toEqual(2);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;

    list.append(first);
    list.append(second);
    list.append(third);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
  });

  //=======NOT PASSING=========\\
  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 3;
    let third = 2;

    list.append(first);
    list.append(second);
    list.insertBefore(second, third);
    expect(list.head.next.value).toEqual(2);
  });

  //======WILL NOT PASS BECAUSE INSERT BEFORE IS NOT WORKING===========\\
  it('Can successfully insert a node before the first node of a linked list', () => {

  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;
    let fourth = 4;

    list.append(first);
    list.append(second);
    list.append(fourth);
    list.insertAfter(second, third);
    expect(list.head.next.next.value).toEqual(3);
    console.log(list);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;

    list.append(first);
    list.append(second);
    list.insert(third);
    expect(list.head.next.next.value).toEqual(3);
  });

  it('can successfully insert a node  after the last node of the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.append(first);
    list.insert(second);
    expect(list.head.next.value).toEqual(2);
  });

  //=====================CHALLENGE 07============================\\

  // Where k and the length of the list are the same

  it('should retrieve the value of node k from end of list where k is greater than the length of the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;
    let fourth = 4;

    list.append(first);
    list.append(second);
    list.append(third);
    list.append(fourth);
    expect(list.kFromEnd(5)).toEqual(null);
  });

  it('should retrieve the value of node k from end of list where k and the length of the list are the same', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;
    let fourth = 4;

    list.append(first);
    list.append(second);
    list.append(third);
    list.append(fourth);
    expect(list.kFromEnd(4)).toEqual(1);
  });

  it('should retrieve the value of node k from end of list where k is not a positive integer', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;
    let fourth = 4;

    list.append(first);
    list.append(second);
    list.append(third);
    list.append(fourth);
    expect(list.kFromEnd(-1)).toEqual(null);
  });

  it('should retrieve the value of node k from end of linked list if list has only one node', () => {
    let list = new LL();
    let first = 1;

    list.append(first);
    expect(list.kFromEnd(1)).toEqual(null);
  });

  it('should retrieve the value of node k from end of list, “Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;
    let fourth = 4;

    list.append(first);
    list.append(second);
    list.append(third);
    list.append(fourth);
    expect(list.kFromEnd(2)).toEqual(3);
  });

});
