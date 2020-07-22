# 701. Insert into a Binary Search Tree
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/insert-into-a-binary-search-tree/)

## Problem
Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

For example, 

Given the tree:
```
        4
       / \
      2   7
     / \
    1   3
```

And the value to insert: 5

You can return this binary search tree:
```
         4
       /   \
      2     7
     / \   /
    1   3 5
```
This tree is also valid:
```
         5
       /   \
      2     7
     / \   
    1   3
         \
          4
```
 

Constraints:

* The number of nodes in the given tree will be between 0 and 10^4.
* Each node will have a unique integer value from 0 to -10^8, inclusive.
* -10^8 <= val <= 10^8
* It's guaranteed that val does not exist in the original BST.

Definition for a binary tree node:
```javascript
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
```
## Whiteboard


## Solutions

### Recursively
* Time Complexity: O(log n)
* Space Complexity: O(1)

```javascript
const insertIntoBST = function(root, val) {
  if (root === null) {
    return new TreeNode(val);
  }
  
  if(val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  
  return root;
};
```

### Iteratively
* Time Complexity: O(log n)
* Space Complexity: O(1)

```javascript
const insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val);
  
  let currentNode = root;
  
  while (currentNode) {
    if (currentNode.val < val) {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
        break;
      }
      
      currentNode = currentNode.right;
    } else {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val, null, null);
        break;
      }
      
      currentNode = currentNode.left;
    }
  }
  
  return root;
};
```