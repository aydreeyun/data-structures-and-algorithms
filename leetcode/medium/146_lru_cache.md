# 146. LRU Cache
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/lru-cache/)

## Problem
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

__Follow up__:

Could you do both operations in O(1) time complexity?

Example:

```
LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```


## Whiteboard



## Solutions

```javascript
const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.count = 0;
  // doubly linked list (constant removal)
  this.head = null;
  this.tail = null;
  // hash table (constant lookup)
  this.hash = {};
};

LRUCache.prototype.get = function(key) {
  // if the key exists in the hash
  if (this.hash[key]) {
    // get the val, next, and prev from the hash at key
    const { val, next, prev } = this.hash[key];
    
    // if prev is not null, prev's next points to the current's next
    if (prev) prev.next = next;
    // if next is not null, next's prev points to prev if it exists or no effect if it doesn't (for capacity of 1)
    if (next) next.prev = prev || next.prev;
    
    // if the tail of doubly linked list is the hash at the key
    if (this.tail === this.hash[key]) {
      // set tail equal to prev if it exists or no effect if it doesnt (for capacity of 1)
      this.tail = prev || this.hash[key];
    }
    
    // set up the hash at key as the head by setting hash at key's prev to null
    this.hash[key].prev = null;
    
    // if the head is not the hash at key already
    if (this.head !== this.hash[key]) {
      // set the hash at key's next equal to the current head
      this.hash[key].next = this.head;
      // set the current head's prev to the hash at key
      this.head.prev = this.hash[key];
    }
    
    // finally set the head to the hash at key
    this.head = this.hash[key];
    
    // return the value specified
    return val;
  }
  
  // return -1 if it does not exist within the hash
  return -1;
};

LRUCache.prototype.put = function(key, value) {
  // if the hash at key already exists
  if (this.hash[key]) {
    // rewrite the value
    this.hash[key].val = value;
    // call get to move to the head of linked list
    this.get(key);
  } else {
    // otherwise set a new value for the hash at key
    this.hash[key] = { key: key, val: value, next: null, prev: null };
    
    // if the head already exists
    if (this.head) {
      // set the head's prev to the new hash at key
      this.head.prev = this.hash[key];
      // set the new hash at key's next to the current head
      this.hash[key].next = this.head;
    }
    
    // finally set the head to the new hash at key
    this.head = this.hash[key];
    // if the tail does not exist, then the new hash at key must also be the tail
    if (!this.tail) this.tail = this.hash[key];
    // increment the count
    this.count++;
  }
  
  // if the count is exceeds the capacity
  if (this.count > this.capacity) {
    // save the key to be removed to a variable
    const removedKey = this.tail.key;
    
    // if the tail has a prev (for single capacity)
    if (this.tail.prev) {
      // set the tail's prev's next to null (deleting next pointer to the removed key)
      this.tail.prev.next = null;
      // the tail will now be the tail's prev
      this.tail = this.tail.prev;
    }
    
    // remove from hash
    delete this.hash[removedKey];
    // decrement the count
    this.count--;
  }
};
```
