# 2. Add Two Numbers
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/add-two-numbers/)

## Problem
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```


## Whiteboard



## Solutions

```javascript
const addTwoNumbers = function(l1, l2) {
  // initialize new list to add both lists
  const list = new ListNode(null);
  // set current element to the new list
  let current = list;
  // initialize a sum and a carry for each digit
  let sum = 0;
  let carry = 0;
  
  // while either list has elements or the sum is greater than 0 (account for last digit having a carry)
  while (l1 || l2 || sum > 0) {
    // if each list exists add the value to the sum and go down each list
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    
    // if the sum is greater than or equal to 10, increase the carry by one and subtract 10 to get a single digit
    if (sum >= 10) {
      carry++;
      sum -= 10;
    }
    
    // initialize a new list node with the current sum
    current.next = new ListNode(sum);
    // go down the current list
    current = current.next;
    // the next sum will have the carry
    sum = carry;
    // reset the carry
    carry = 0;
  }
  
  // return the next element in the list (first value will be null)
  return list.next;
};
```
