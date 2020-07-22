# 1. Two Sum
* Difficulty: Easy
* [Link to Problem](https://leetcode.com/problems/two-sum/)

## Problem
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]
```


## Whiteboard
The problem is asking for us to 


## Solutions

### Brute Force
* Time Complexity: O(n^2)
* Space Complexity: O(1)

By checking each number with every other number, we can arrive at a clean solution that iterates until a pair of numbers is found.

Though the readability and space complexity of this solution is better, the time complexity is very inefficient, making this a less optimal solution.
```javascript
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
```

### Using Hash Tables
* Time Complexity: O(n)
* Space Complexity: O(n)

Using hash tables, we can optimize the time complexity of this problem by sacrificing efficiency in space complexity as well as a bit of readability.

The idea is to save the index of each number in the array into a hash table so that when the difference is found (target - number), it will return the pair of indices.

```javascript
const twoSum = function(nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const i = hash[target - num];

    if (hash[target - num] !== undefined) {
      return [i, j];
    }

    hash[num] = j;
  }
};
```
