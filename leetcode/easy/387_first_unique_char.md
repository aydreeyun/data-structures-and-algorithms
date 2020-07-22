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

```javascript
const firstUniqChar = function(s) {
  const hash = {};
    
  s.split("").forEach(char => {
      if (!hash[char]) hash[char] = 0;
      hash[char] += 1;
  });

  const unique = Object.keys(hash)[Object.values(hash).indexOf(1)];
  
  return s.split("").indexOf(unique);
};
```