// LINKED LIST EXAMPLE
// 10 --> 5 --> 16
const example = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  },
  tail: {
    value: 16,
    next: null
  },
  length: 3
};

console.log(example);

// NODE CLASS
// a separate class for nodes is often used to keep code dry and modular
class Node {
  constructor(value) {
    this.value = value; // same concept, set value equal to the value passed in argument, and the next pointing to null;
    this.next = null
  }
};

// SINGLY-LINKED LIST CLASS
class SinglyLinkedList { 
  // instantiating a linked list
  constructor(value) {
    // set a head property with the inital value passed into argument
    this.head = {
      value: value,
      next: null        // next would be null since this is the only node at the creation
    };

    // the tail would also be the head since it is the only node
    this.tail = this.head;
    // OPTIONAL
    this.length = 1;
  }

  // method to help visualize linked list order using array
  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  // O(1)
  append(value) {       
    // instantiate a new node
    const newNode = {
      value: value,     // value equal to value passed in as argument
      next: null        // next would be null since this is being appended
    };

    // we FIRST set the current tail's next value to the new node created
    this.tail.next = newNode;
    // THEN we set the tail to be the new node (order of operations)
    this.tail = newNode;
    // increment the optional length
    this.length++;
  }

  // O(1)
  prepend(value) {
    // instantiate a new node
    const newNode = {
      value: value,     // value equal to value passed in as argument
      next: null        // keep next as null for now (mirroring if node class was used)
    };

    // we FIRST set the new node's next pointing to the current head
    newNode.next = this.head;
    // THEN we set the head to be the new node
    this.head = newNode;
    // increment the optional length
    this.length++;
  }

  // O(n)
  // takes 2 arguments, index (where to insert node) and value
  insert(index, value) {
    // if the index is greater than or equal to the length of the list
    if (index >= this.length) {
      // use the append method that is already defined, making it O(1)
      return this.append(value);
    // if the index is 0
    } else if (index === 0) {
      // use the prepend method that is already defined, making it O(1)
      return this.prepend(value);
    }

    // instantiate new node, same as before
    const newNode = {
      value: value,
      next: null
    };

    // list traversal to find the element previous to insert index
    let counter = 0;
    let currentNode = this.head;

    while (counter < (index - 1)) {
      currentNode = currentNode.next;
      counter++;
    }

    // the new node's next will point to the current node's next
    newNode.next = currentNode.next;
    // the current node's next will point to our new node
    currentNode.next = newNode;
    // increment optional length
    this.length++;
  }

  // O(n)
  remove(index) {
    // list traversal to find element previous to remove index
    let counter = 0;
    let currentNode = this.head;

    while (counter < (index - 1)) {
      currentNode = currentNode.next;
      counter++;
    }

    // save the node to be removed to a variable
    let removedNode = currentNode.next;

    // set the current node's next pointer to the unwanted node's next pointer
    currentNode.next = removedNode.next;
    // decrement optional length
    this.length--;
  }

  // POPULAR INTERVIEW QUESTION
  // Reverse a linked list
  reverse() {
    // if the head is the only element, return it (no need for reversal)
    if (!this.head.next) {
      return this.head;
    }

    // reference to first node in list
    let firstNode = this.head;
    // reference to second node
    let secondNode = firstNode.next;

    // traverse the list until second node is null
    while (secondNode) {
      // reference to second node's next pointer
      const temp = secondNode.next;
      // the second node's next pointer will now point to the first node (reversing the order)
      secondNode.next = firstNode;
      // set the first node to the second node now to continuously traverse
      firstNode = secondNode;
      // second node now reference's the original second node's next pointer
      secondNode = temp;
    }

    // set the original head's next to null completing reversal
    this.head.next = null;
    // set the head to the last node now that the list has been traversed
    this.head = firstNode;
  }
};

// TEST CASES
const myLinkedList = new SinglyLinkedList(10);  // [10 --> null]
console.log(myLinkedList.printList());
myLinkedList.append(5);   // [10 --> 5 --> null]
console.log(myLinkedList.printList());
myLinkedList.append(16);  // [10 --> 5 --> 16 --> null]
console.log(myLinkedList.printList());
myLinkedList.prepend(1);  // [1 --> 10 --> 5 --> 16 --> null]
console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);  // [1 --> 10 --> 99 --> 5 --> 16 --> null]
console.log(myLinkedList.printList());
myLinkedList.remove(2);   // [1 --> 10 --> 5 --> 16 --> null]
console.log(myLinkedList.printList());
myLinkedList.reverse();   // [16 --> 5 --> 10 --> 1 --> null]
console.log(myLinkedList.printList());
console.log(myLinkedList);



