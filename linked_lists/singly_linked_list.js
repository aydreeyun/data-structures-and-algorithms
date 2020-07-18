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
class Node {            // a separate class for nodes is often used to keep code dry and modular
  constructor(value) {
    this.value = value; // same concept, set value equal to the value passed in argument, and the next pointing to null;
    this.next = null
  }
};

// LINKED LIST CLASS
class LinkedList { 
  constructor(value) {  // instantiating a linked list
    this.head = {       // set a head property with the inital value passed into argument
      value: value,
      next: null        // next would be null since this is the only node at the creation
    };
    this.tail = this.head;  // the tail would also be the head since it is the only node
    this.length = 1; // OPTIONAL
  }

  printList() {     // method to help visualize linked list order using array
    const arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  append(value) {       // O(1)
    const newNode = {   // instantiate a new node
      value: value,     // value equal to value passed in as argument
      next: null        // next would be null since this is being appended
    };

    this.tail.next = newNode;   // we FIRST set the current tail's next value to the new node created
    this.tail = newNode;        // THEN we set the tail to be the new node (order of operations)
    this.length++;              // increment the optional length
  }

  prepend(value) {      // O(1)
    const newNode = {   // instantiate a new node
      value: value,     // value equal to value passed in as argument
      next: null        // keep next as null for now (mirroring if node class was used)
    };

    newNode.next = this.head;   // we FIRST set the new node's next pointing to the current head
    this.head = newNode;        // THEN we set the head to be the new node
    this.length++;              // increment the optional length
  }

  insert(index, value) {  // O(n) - takes 2 arguments, index (where to insert node) and value
    if (index >= this.length) {   // if the index is greater than or equal to the length of the list
      return this.append(value);  // use the append method that is already defined, making it O(1)
    } else if (index === 0) {     // if the index is 0
      return this.prepend(value); // use the prepend method that is already defined, making it O(1)
    }

    const newNode = {           // instantiate new node, same as before
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

    newNode.next = currentNode.next;  // the new node's next will point to the current node's next
    currentNode.next = newNode;       // the current node's next will point to our new node
    this.length++;                    // increment optional length
  }

  remove(index) {
    // list traversal to find element previous to remove index
    let counter = 0;
    let currentNode = this.head;

    while (counter < (index - 1)) {
      currentNode = currentNode.next;
      counter++;
    }

    let removedNode = currentNode.next; // save the node to be removed to a variable

    currentNode.next = removedNode.next;  // set the current node's next pointer to the unwanted node's next pointer
    this.length--;  // decrement optional length
  }
};

// TEST CASES
const myLinkedList = new LinkedList(10);  // [10 --> null]
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
console.log(myLinkedList);