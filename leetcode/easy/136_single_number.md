# 136. Single Number
* Difficulty: Easy
* [Link to Problem](https://leetcode.com/problems/single-number/)

## Problem
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Example 1:

```
Input: [2,2,1]
Output: 1
```

Example 2:

```
Input: [4,1,2,1,2]
Output: 4
```
Note:\
\
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


## Whiteboard


## Solutions
* Time Complexity: O(n)
* Space Complexity: O(n)

```javascript
const singleNumber = function(nums) {
    const hash = {};

    nums.forEach(num => {
      if (!hash[num]) hash[num] = 0;
      hash[num] += 1;
    });

    return Object.keys(hash)[Object.values(hash).indexOf(1)];
};
```