# 283. Move Zeroes
* Difficulty: Easy
* [Link to Problem](https://leetcode.com/problems/move-zeroes/)

## Problem
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example 1:

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

Example 2:

```
Input: [0,0,1]
Output: [1,0,0]
```

__Note__:

* You must do this in-place without making a copy of the array.
* Minimize the total number of operations.


## Whiteboard


## Solutions
* Time Complexity: O(n^2)
* Space Complexity: O(1)

```javascript
var moveZeroes = function(nums) {
  let length = nums.length

  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      length--;
      i--;
    }
  };

  return nums;
};
```