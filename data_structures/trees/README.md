# Trees
Trees are a type of data structure that stores data in a hierarcy of levels. Each node can point to multiple children nodes to provide this structure. The top-most level node is called the __Root__ node and the bottom-most level nodes are called __Leaves__. Each tree has only one root node, but can have multiple leaves.\
\
There are many different types of trees, depending on how many children each child node has, they can be classified as an _N-ary tree_. For example, a tree where each node only has one child will be called a _Unary Tree_. An example of a Unary Tree is a __Linked List__. A tree where each node has no more than 2 children is called a _Binary Tree_.\
\
There are many different types of trees but technical interviews will be mostly focused on ___Binary Search Trees___. Binary Search Trees have one specific rule: the values that are less than the current node are placed on the left while the values greater than the current node are placed on the right.

## Big O

#### Binary Search Trees (Balanced)
* lookup = __O(log n)__
* insert = __O(log n)__
* delete = __O(log n)__

The time complexity of a balanced binary search tree methods is O(log n) because we only traverse through the array depending on what the current value of the node is, we never traverse through the entire tree.

#### Binary Search Trees (Unbalanced)
* lookup = __O(n)__
* insert = __O(n)__
* delete = __O(n)__

## Heap


## Trie

