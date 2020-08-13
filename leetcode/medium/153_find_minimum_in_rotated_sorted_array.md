# 153. Find Minimum in Rotated Sorted Array
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

## Problem
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

```
Example 1:

Input: [3,4,5,1,2] 
Output: 1

Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
```


## Whiteboard



## Solutions

### Binary Search
```javascript
const findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  
  return nums[left];
};
```
