# 1209. Remove All Adjacent Duplicates in String II
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)

## Problem
Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

Example 1:

```
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
```

Example 2:

```
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
```

Example 3:

```
Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
```

Constraints:

* 1 <= s.length <= 10^5
* 2 <= k <= 10^4
* s only contains lower case English letters.

## Whiteboard


## Solutions

```javascript
const removeDuplicates = function(s, k) {
  // initialize stack to hold most recent characters and a count of the character
  const stack = [];
  
  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    // get the last character from the stack
    const lastChar = stack[stack.length - 1];
    
    // if there is a last character and the last character is equal to the current character
    if (lastChar && lastChar[0] === s[i]) {
      // increment the count of the character
      lastChar[1]++;
      
      // if the character's count is equal to k, remove it from the stack
      if (lastChar[1] === k) {
        stack.pop();
      }
    } else {
      // otherwise push to the stack the character and a count starting at 1
      stack.push([s[i], 1]);
    }
  }
  
  // initialize answer string to add characters in the stack
  let ans = "";
  
  // iterate through the stack
  for (let i = 0; i < stack.length; i++) {
    // add to the answer string the current character repeated by the count
    ans += stack[i][0].repeat(stack[i][1]);
  }
  
  // return the answer string
  return ans;
};
```