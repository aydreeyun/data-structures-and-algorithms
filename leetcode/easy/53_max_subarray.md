# 53. Maximum Subarray
* Difficulty: Easy
* [Link to Problem](https://leetcode.com/problems/maximum-subarray/)

## Problem
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example 1:

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

Example 2:
```
Input: [-1,-2],
Output: -1
Explanation: [-1] has the largest sum = -1.
```


## Whiteboard


## Solutions

```javascript
const maxSubArray = function(nums) {
  let currSum = nums[0];
  let max = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0;
    }
    
    currSum += nums[i];
    
    if (currSum > max) {
      max = currSum;
    }
  }
      
  return max;
};
```