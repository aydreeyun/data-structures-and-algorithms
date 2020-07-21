// USING LINKED LISTS
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue1 {
  constructor() {
    // same as a stack, set pointers to the first and last elements in queue as well as the length
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // O(1)
  peek() {
    // return the first element in the queue
    return this.first;
  }

  // O(1)
  enqueue(ele) {
    // instantiate new node with the ele passed in argument
    const newNode = new Node(ele);

    // if the queue is empty
    if (this.length === 0) {
      // set both first and last to the new node
      this.first = newNode;
      this.last = newNode;
    } else {
      // otherwise, set the current last node's next pointing to the new node and the new node to be last
      this.last.next = newNode;
      this.last = newNode;
    }

    // increment length
    this.length++;
    return this;
  }

  // O(1)
  dequeue() {
    // if there are no elements in the queue, return null
    if (!this.first) {
      return null;
    }

    // if there is only one element in the queue, set the last to null
    if (this.first === this.last) {
      this.last = null;
    }

    // set the first element to the current first element's next pointer
    this.first = this.first.next;
    // decrement length
    this.length--;
    return this;
  }
}

// TEST CASES
const queue1 = new Queue1();
queue1.enqueue(1)
console.log(queue1.peek());
queue1.enqueue(2)
console.log(queue1.peek());
queue1.enqueue(3)
console.log(queue1.peek());
console.log(queue1);
queue1.dequeue();
console.log(queue1.peek());
queue1.dequeue();
console.log(queue1.peek());
queue1.dequeue();
console.log(queue1.peek());
console.log(queue1);



// USING ARRAYS (LESS EFFICIENT)
class Queue2 {
  constructor() {
    this.queue = [];
  }

  // O(1)
  peek() {
    // return first element in array
    return this.queue[0];
  }

  // O(n)
  enqueue(ele) {
    // using built in array .push() method which is O(n)
    this.queue.push(ele);
    return this;
  }

  // O(n)
  dequeue() {
    // using build in array .shift() method which is O(n)
    this.queue.shift();
    return this;
  }
}

// TEST CASES
const queue2 = new Queue2();
queue2.enqueue(1)
console.log(queue2.peek());
queue2.enqueue(2)
console.log(queue2.peek());
queue2.enqueue(3)
console.log(queue2.peek());
console.log(queue2);
queue2.dequeue();
console.log(queue2.peek());
queue2.dequeue();
console.log(queue2.peek());
queue2.dequeue();
console.log(queue2.peek());
console.log(queue2);
