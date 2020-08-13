# 117. Populating Next Right Pointers in Each Node II
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/)

## Problem
Given a binary tree
```
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};
```
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

__Follow up__:

* You may only use constant extra space.
* Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

Example 1:

![](../images/117.png)

```
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
```

Constraints:

* The number of nodes in the given tree is less than 6000.
* -100 <= node.val <= 100



## Whiteboard


## Solutions

```javascript
function Node(val, left, right, next) {
   this.val = val === undefined ? null : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
   this.next = next === undefined ? null : next;
};

const connect = function(root) {
  // if there is no argument given, return null
  if (!root) return null;
  // initialize a queue with the given root
  const queue = [root];
  
  // BFS (level order traversal)
  while (queue.length) {
    // save length of queue to account for each level's nodes
    const len = queue.length;
    
    // iterate through the level's nodes
    for (let i = 0; i < len; i++) {
      // current node is shifted from the queue
      const node = queue.shift();
      
      // if the index is not the last element in level, set the current node's next to the next element in the queue
      if (i < len - 1) node.next = queue[0];
      
      // push the node's left and right respectively
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  
  // return the root with next pointers initialized
  return root;
};
```