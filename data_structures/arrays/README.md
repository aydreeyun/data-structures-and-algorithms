# Arrays
An array is the simplest and most widely used data structure. The main purpose of an array is to store data and iterate through them. Similar to hashes, the key-value pairs for an array are the indices and elements respectively. An index will point to the element that is stored at that point. 


## Big O
* lookup = __O(1)__
  * we can lookup elements in the array by their specific index
* push = __O(1)__
  * adding elements to the end of the array is a very efficient process
* insert = __O(n)__
  * inserting an element in an array will require the elements following it to change indices, thus creating a linear complexity
* delete = __O(n)__
  * similar to inserting, deleting an element will require the elements following it to shift their indices upward
