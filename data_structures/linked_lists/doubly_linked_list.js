// DOUBLY-LINKED LIST CLASS
// Same as singly-linked lists but each node will have a prev pointer
class DoublyLinkedList { 
  // instantiating a linked list
  constructor(value) {
    // set a head property with the inital value passed into argument
    this.head = {
      value: value,
      next: null,       // next would be null since this is the only node at the creation
      prev: null        // prev would be null as well
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
      next: null,       // next would be null since this is being appended
      prev: null        // keep prev as null for now (mirroring if node class was used)
    };

    // set the new node's prev to the original tail
    newNode.prev = this.tail;
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
      next: null,       // keep next as null for now (mirroring if node class was used)
      prev: null        // prev will be null ince this is being prepended
    };

    // set the current head's previous pointer to the new node
    this.head.prev = newNode;
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

    // set the current node's original following node to a variable
    let followingNode = currentNode.next;  

    // the new node's prev to the current node
    newNode.prev = currentNode;
    // the new node's next will point to the current node's next
    newNode.next = followingNode;
    // the following node's prev will be the new node
    followingNode.prev = newNode;
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
    // set the removed node's next node to a variable
    let followingNode = removedNode.next;

    // set the current node's next pointer to the unwanted node's next pointer
    currentNode.next = followingNode;
    // set the following node's previous pointer to the current node
    followingNode.prev = currentNode;
    // decrement optional length
    this.length--;
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