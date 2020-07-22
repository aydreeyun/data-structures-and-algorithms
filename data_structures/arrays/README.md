# Arrays
An array is the simplest and most widely used data structure. The main purpose of an array is to store data and iterate through them. Similar to hashes, the key-value pairs for an array are the indices and elements respectively. An index will point to the element that is stored at that point. 

#### Pros
* Fast lookups
* Fast push/pop
* Ordered

#### Cons
* Slow inserts
* Slow deletes


## Big O
* lookup = __O(1)__
  * we can lookup elements in the array by their specific index
* push = __O(1)__
  * adding elements to the end of the array is a very efficient process
* insert = __O(n)__
  * inserting an element in an array will require the elements following it to change indices, thus creating a linear complexity
* delete = __O(n)__
  * similar to inserting, deleting an element will require the elements following it to shift their indices upward


## Strings
Strings behave similarly to arrays, they are simply an array of characters. Any interview question that involves strings will involve arrays in some shape or form. You will most likely be splitting the string into an array and then joining the array back to a string.

### Reverse the String
This is a very common question involving strings. You are given a string and must reverse the order of the characters.\
\
Solution: Iterate through the string backwards and push each character in that order.
```javascript
const reverse = str => {
  const reverse = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reverse.push(str[i]);
  }

  return reverse.join('');
}
```
The solution below is the same as above, using JavaScript's built in `.reverse()` function for arrays.
```javascript
const reverse = str => {
  return str.split('').reverse().join('');
}
```
