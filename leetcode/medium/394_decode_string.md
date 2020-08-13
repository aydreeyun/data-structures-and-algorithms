# 394. Decode String
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/decode-string/)

## Problem
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Example 1:

```
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
```

Example 2:

```
Input: s = "3[a2[c]]"
Output: "accaccacc"
```

Example 3:

```
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
```

Example 4:

```
Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
```


## Whiteboard


## Solutions

```javascript
const decodeString = function(s) {
  // initialize a stack
  const stack = [];
  
  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    // push characters to the stack until it reaches a closing bracket
    if (s[i] !== "]") {
      stack.push(s[i]);
      continue;
    }

    // the current character will be a letter since it is before a closing bracket
    let currChar = stack.pop();
    // initialize the current string
    let currStr = "";

    // until the current character reaches the opening bracket
    while (currChar !== "[") {
      // add the current character to beginning of the string
      currStr = currChar + currStr;
      // keep going down the stack until an opening bracket is found (once found it is already popped out of stack)
      currChar = stack.pop();
    }
    
    // initialize a string for the number (number can be multiple characters)
    let num = "";
    // current character will be the last digit of the number
    currChar = stack.pop();
    
    // while the current character is a number
    while (Number.isInteger(parseInt(currChar))) {
      // add the current character to the front of the number
      num = currChar + num;
      // keep going down the stack until a non number is found
      currChar = stack.pop();
    }
    
    // check if you are not at the beginning of the string
    if (currChar !== undefined) stack.push(currChar);
    // push the string repeated `num` number of times to the stack
    stack.push(currStr.repeat(parseInt(num)));
  }
  
  // join the stack together and return
  return stack.join("");
};
```