# Hash Tables
Hash tables are another data structure that stores data in buckets that are labeled by hashing the key. Data is stored in buckets depending on the hashed key in order to facilitate faster lookup time. Hash tables are used for faster time complexity in exchange for memory complexity.

#### Pros
* Fast lookups
* Fast inserts
* Keys are unique

#### Cons
* Unordered
* Slow key iteration


## Big O
* insert = O(1)
* lookup = O(1)
* delete = O(1)


## Using Hashes to Improve Time Complexity
Because hashes have very fast lookup, insertion, and deletion, they can be used to improve the time complexity of algorithms.


### Two Sum
Find the indices of 2 elements in the array whose sum is equal to the target.\
\
__Solution 1: Nested Loop__\
Using nested loops, we can solve this problem by checking every element in the array with every other element to see if the sum is equal to the target. However, this solution is inefficient as it is O(n^2) due to the nested loop.
```javascript
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
}
```
__Solution 2: Using a Hash__\
Using a hash, we will only need to iterate through the array once, making this solution more efficient at O(n) time complexity.
```javascript
const twoSum = (arr, target) => {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    const j = hash[target - arr[i]];

    if (j !== undefined) {
      return [j, i];
    }

    hash[arr[i]] = i;
  }
}
```


