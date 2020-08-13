# 98. Validate Binary Search Tree
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/validate-binary-search-tree/)

## Problem
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

* The left subtree of a node contains only nodes with keys less than the node's key.
* The right subtree of a node contains only nodes with keys greater than the node's key.
* Both the left and right subtrees must also be binary search trees.

Example 1:

```
    2
   / \
  1   3

Input: [2,1,3]
Output: true
```

Example 2:

```
    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```


## Whiteboard


## Solutions

```javascript
// pass a min and max to the arguments for recursion
const isValidBST = function(root, min = null, max = null) {
  // base case - if traversal completes without returning false, return true
  if (!root) return true;
  
  // RIGHT TRAVERSAL - if min is greater than the current node's value, return false
  if (min !== null && min.val >= root.val) return false;
  // LEFT TRAVERSAL - if max is less than the current node's value, return false
  if (max !== null && max.val <= root.val) return false;
  
  // traverse left (pass root as max), traverse right (pass root as min)
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
```