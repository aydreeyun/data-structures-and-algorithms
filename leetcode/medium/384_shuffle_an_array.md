# 384. Shuffle an Array
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/shuffle-an-array/)

## Problem
Shuffle a set of numbers without duplicates.

Example:
```
// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
```

## Whiteboard


## Solutions

```javascript
const Solution = function(nums) {
  // nums is the array of numbers
  this.nums = nums;
};

Solution.prototype.reset = function() {
  // reset will recover the original array saved to instance variable
  return this.nums;
};

Solution.prototype.shuffle = function() {
  // save a copy of the nums array
  const shuffled = this.nums.slice();
  
  // iterate through the array
  for (let i = 0; i < shuffled.length; i++) {
    // get a random index using a random number generator multiplied by the array's length
    const randIdx = Math.floor(Math.random() * shuffled.length);
    // swap the current element with the random index to shuffle
    [shuffled[i], shuffled[randIdx]] = [shuffled[randIdx], shuffled[i]];
  }
  
  // return the shuffled array
  return shuffled;
};
```