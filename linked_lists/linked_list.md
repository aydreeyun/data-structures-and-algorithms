# Linked Lists
A linked list is a list of nodes where each node has a pointer to the next node in the sequence.\
The first node in the list is called the __Head__ and the last node in the list is called the __Tail__. The tail is defined as pointing to a ___null value___ signaling the end of the list.

<!-- 
## Why linked lists?
Compared to arrays, insertion and deletion in this data structure has a better time complexity. Arrays require the shifting of indices when an element is inserted or deleted causing these functions to be O(n).  -->

## Big O
* prepend (add to front of list) = O(1)
* append (add to back of list) = O(1)
* lookup = O(n)
* insert = O(n)
* delete = O(n)

## Singly vs Doubly
A node consists of two There are two types of linked lists, singly and doubly.\

### Singly Linked Lists
Singly linked lists comprise of nodes that hold 2 pieces of information, the value and a pointer to the next node. Singly linked lists _ONLY_ go in one direction 