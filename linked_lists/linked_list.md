# Linked Lists
A linked list is a list of nodes where each node has a pointer to the next node in the sequence.\
The first node in the list is called the __Head__ and the last node in the list is called the __Tail__. The tail is defined as pointing to a ___null value___ signaling the end of the list.

<!-- 
## Why linked lists?
Compared to arrays, insertion and deletion in this data structure has a better time complexity. Arrays require the shifting of indices when an element is inserted or deleted causing these functions to be O(n).  -->

## Big O
* prepend (add to front of list) = __O(1)__
  * linked lists have a reference to their head node which can be easily reassigned
* append (add to back of list) = __O(1)__
  * linked lists also have a reference to their tail node which can be easily reassigned
* lookup = __O(n)__
  * lookup is O(n) because 
* insert = __O(n)__
* delete = __O(n)__

## Singly vs Doubly
A node consists of two There are two types of linked lists, singly and doubly.\

### Singly Linked Lists
Singly linked lists comprise of nodes that hold 2 pieces of information, the value and a pointer to the next node. Singly linked lists _ONLY_ go in one direction 