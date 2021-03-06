# Stacks
Stacks are a type of data structure which employs the Last In First Out (LIFO) principle. The last item to be added to the stack will be the first item removed. Stacks can be created using either arrays or linked lists.

### Last In First Out (LIFO)
#### Last In
![](./images/push.gif)
#### First Out
![](./images/pop.gif)

## Big O

__BOTH__ arrays and linked lists
* lookup = __O(n)__
* pop = __O(1)__
* push = __O(1)__
* peek = __O(1)__

# Queues
Queues, are like stacks but the main difference is that it employs the First In First Out (FIFO) principle. Queues can also be created using arrays and linked lists, however arrays are less efficient when it comes to adding and removing elements from the queue.

### First In First Out (FIFO)
#### First In
![](./images/enqueue.gif)
####  First Out
![](./images/dequeue.gif)


## Big O

Linked Lists
* lookup = __O(n)__
* enqueue/unshift = __O(1)__
* dequeue/shift = __O(1)__
* peek = __O(1)__

Arrays (Less efficient)
* lookup = __O(n)__
* enqueue/unshift = __O(n)__
* dequeue/shift = __O(n)__
* peek = __O(1)__

Arrays are less efficient for queues because adding and removing the first element to an array is an O(n) operation due to the shifting of indices.
