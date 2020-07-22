# 258. Add Digits
* Difficulty: Easy
* [Link to Problem](https://leetcode.com/problems/add-digits/)

## Problem
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

```
Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
```

__Follow up__:
Could you do it without any loop/recursion in O(1) runtime?

## Whiteboard


## Solutions

### Using Recursion
* Time Complexity: O(n)
* Space Complexity: O(n)

```javascript
var addDigits = function(num) {
  let digits = [];
  
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  
  let sum = 0;
  
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }
  
  if (sum >= 10) {
    return addDigits(sum);
  } else {
    return sum;
  }
};
```

### Modulo 9 Arithmetic
* Time Complexity: O(1)
* Space Complexity: O(1)

```javascript
var addDigits = function(num) { 
  if (num === 0) return 0;
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;
};
```