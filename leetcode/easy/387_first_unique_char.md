# 387. First Unique Character in a String
* Difficulty: Easy
* [Link to Problem](https://leetcode.com/problems/first-unique-character-in-a-string/)

## Problem
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Example 1:

```
s = "leetcode"
return 0
```

Example 2:

```
s = "loveleetcode"
return 2
```

Example 3:

```
s = "dddccdbba"
return 8
```

__Note__: You may assume the string contains only lowercase English letters.


## Whiteboard


## Solutions
* Time Complexity: O(n)
* Space Complexity: O(n)

```javascript
const firstUniqChar = function(s) {
  // initialize counter hash
  const hash = {};
  
  // iterate through the string and increment the count of each character in the hash
  for (let i = 0; i < s.length; i++) {
    if (!hash[char]) hash[char] = 0;
    hash[char]++;
  }

  // grab keys and find the index of the first instance where count is 1
  const unique = Object.keys(hash)[Object.values(hash).indexOf(1)];
  
  // returns an index if it exists or returns -1 if not found
  return s.split("").indexOf(unique);
};
```