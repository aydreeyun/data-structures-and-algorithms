// USING LINKED LISTS
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack1 {
  constructor() {
    // set pointer for both the top and bottom of the queues with optional length
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // O(1)
  peek() {
    // return the top pointer
    return this.top;
  }

  push(ele) {
    // instantiate new node with the ele passed in argument
    const newNode = new Node(ele);

    // if the stack is empty
    if (this.length === 0) {
      // set both top and bottom to the new node
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // otherwise, set the new node to the top and the former top to the new node's next pointer
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }

    // increment length
    this.length++;
    return this;
  }

  pop() {
    // if there are no elements in the stack, return null
    if (!this.top) {
      return null;
    }

    // if there is only one element in the stack, set the bottom to null
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    // set the current top's next to be the new top
    this.top = this.top.next;
    // decrement length
    this.length--;
    return this;
  }
}

// TEST CASES
const stack1 = new Stack1();
stack1.push(1)
console.log(stack1.peek());
stack1.push(2)
console.log(stack1.peek());
stack1.push(3)
console.log(stack1.peek());
console.log(stack1);
stack1.pop();
console.log(stack1.peek());
stack1.pop();
console.log(stack1.peek());
stack1.pop();
console.log(stack1.peek());
console.log(stack1);



// USING ARRAYS
// very simple using built in array methods
class Stack2 {
  constructor() {
    this.array = [];
  }

  // O(1)
  peek() {
    // return the last element in the stack
    return this.array[this.array.length - 1];
  }

  // O(1)
  push(ele) {
    // using built in array .push() method which is O(1)
    this.array.push(ele);
    return this;
  }

  // O(1)
  pop() {
    // using built in array .pop() method which is also O(1)
    this.array.pop();
    return this;
  }
}

// TEST CASES
const stack2 = new Stack2();
stack2.push(1)
console.log(stack2.peek());
stack2.push(2)
console.log(stack2.peek());
stack2.push(3)
console.log(stack2.peek());
console.log(stack2);
stack2.pop();
console.log(stack2.peek());
stack2.pop();
console.log(stack2.peek());
stack2.pop();
console.log(stack2.peek());
console.log(stack2);
