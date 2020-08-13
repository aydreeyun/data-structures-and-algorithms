# 445. Add Two Numbers II
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/add-two-numbers-ii/)

## Problem
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

__Follow up__:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:
```
Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
```


## Whiteboard


## Solutions

```javascript
const addTwoNumbers = function(l1, l2) {
  // initialize two stacks for each list
  const stack1 = [];
  const stack2 = [];
  
  // set pointers for each list to go down
  let current1 = l1;
  let current2 = l2;
  
  // push each digit and go down the list for both lists
  while (current1) {
    stack1.push(current1.val);
    current1 = current1.next;
  }
  
  while (current2) {
    stack2.push(current2.val);
    current2 = current2.next;
  }
  
  // initialize a new list node to hold a carry value for each digit to add sum to
  let ans = new ListNode(0);
  
  // while either stacks are populated
  while (stack1.length || stack2.length) {
    // initialize the sum of the current digit
    let sum = 0;
    
    // add the last digit for each stack to the sum
    if (stack1.length) sum += stack1.pop();
    if (stack2.length) sum += stack2.pop();

    // add the carry over to the sum
    sum += ans.val;
    // set the carry over to the ans
    ans.val = sum % 10;
    
    // initialize the next node with the carry over value
    const head = new ListNode(Math.floor(sum / 10));
    // next node will point to the current node (link initialized backwards)
    head.next = ans;
    // move to the next node
    ans = head;
  }
  
  // ternary because the last node will always be 0 if head has no carry over
  return ans.val === 0 ? ans.next : ans;
};
```