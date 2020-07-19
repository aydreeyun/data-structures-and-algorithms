// DOUBLY-LINKED LIST CLASS
// Same as singly-linked lists but each node will have a prev pointer
class DoublyLinkedList { 
  constructor(value) {  // instantiating a linked list
    this.head = {       // set a head property with the inital value passed into argument
      value: value,
      next: null,       // next would be null since this is the only node at the creation
      prev: null        // prev would be null as well
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
      next: null,       // next would be null since this is being appended
      prev: null        // keep prev as null for now (mirroring if node class was used)
    };

    newNode.prev = this.tail    // set the new node's prev to the original tail
    this.tail.next = newNode;   // we FIRST set the current tail's next value to the new node created
    this.tail = newNode;        // THEN we set the tail to be the new node (order of operations)
    this.length++;              // increment the optional length
  }

  prepend(value) {      // O(1)
    const newNode = {   // instantiate a new node
      value: value,     // value equal to value passed in as argument
      next: null,       // keep next as null for now (mirroring if node class was used)
      prev: null        // prev will be null ince this is being prepended
    };

    this.head.prev = newNode    // set the current head's previous pointer to the new node
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
      next: null,
      prev: null
    };

    // list traversal to find the element previous to insert index
    let counter = 0;
    let currentNode = this.head;

    while (counter < (index - 1)) {
      currentNode = currentNode.next;
      counter++;
    }

    let followingNode = currentNode.next  // set the current node's original following node to a variable

    newNode.prev = currentNode;       // the new node's prev to the current node
    newNode.next = followingNode;     // the new node's next will point to the current node's next
    followingNode.prev = newNode;     // the following node's prev will be the new node
    currentNode.next = newNode;       // the current node's next will point to our new node
    this.length++;                    // increment optional length
  }

  remove(index) {   // O(n)
    // list traversal to find element previous to remove index
    let counter = 0;
    let currentNode = this.head;

    while (counter < (index - 1)) {
      currentNode = currentNode.next;
      counter++;
    }

    let removedNode = currentNode.next;     // save the node to be removed to a variable
    let followingNode = removedNode.next;   // set the removed node's next node to a variable

    currentNode.next = followingNode;       // set the current node's next pointer to the unwanted node's next pointer
    followingNode.prev = currentNode;       // set the following node's previous pointer to the current node
    this.length--;  // decrement optional length
  }
};

// TEST CASES
const myLinkedList = new DoublyLinkedList(10);  // [10 --> null]
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