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
It looks like the simplest implementation of an insert is valid for this problem so that makes it much easier. If the problem was asking to reshape the tree based on the input, it would have definitely been more challenging. Knowing how binary search trees work, we can insert the new node by checking the value of the current node as we traverse through the tree. If the current node's value is greater than the incoming node, we know to look left, otherwise look right. We will keep traversing through the tree until a null node is found, then we know to insert the incoming node at that spot.\
\
With this information, we can solve this either iteratively or recursively.

## Solutions

### Recursively
* Time Complexity: O(log n)
* Space Complexity: O(1)

Using recursion, the solution is very clean but coming up with the solution will take some time to draw out what is happening. Our base case is when the root being passed in as an argument is null, we return the incoming node. Now that we have our base case, our recursive case is implemented by comparing the current node's (root) value with the argument value and traversing either left or right. 
```javascript
const insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val);
  
  if (val < root.val) {
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

The solution using iteration is similar to recursion, our condition for the while statement will be checking to see if the current node is not null and performing a check on the current node's value with the argument value. It then checks to see if the next traversal exists, if it doesn't then we insert the node in that spot, otherwise we set the current node to it's next level. When a node is inserted, the while loop is broken and we return the root node.
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