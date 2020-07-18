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
  }
}

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

  append(value) {       // ADD A NODE TO THE END OF THE LIST
    const newNode = {   // instantiate a new node
      value: value,     // value equal to value passed in as argument
      next: null        // next would be null since this is being appended
    };

    this.tail.next = newNode;   // we FIRST set the current tail's next value to the new node created
    this.tail = newNode;        // THEN we set the tail to be the new node (order of operations)
    this.length++;              // increment the optional length
  }

  prepend(value) {
    const newNode = {   // instantiate a new node
      value: value,     // value equal to value passed in as argument
      next: null        // keep next as null for now (mirroring if node class was used)
    };

    newNode.next = this.head;   // we FIRST set the new node's next pointing to the current head
    this.head = newNode;        // THEN we set the head to be the new node
    this.length++;              // increment the optional length
  }
}

// TEST CASES
const myLinkedList = new LinkedList(10);
// myLinkedList.append(5)
// myLinkedList.append(16)
myLinkedList.prepend(16)
console.log(myLinkedList);