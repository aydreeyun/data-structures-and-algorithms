// BINARY SEARCH TREE
class Node {
  constructor(value) {
    // the nodes in a binary search tree will have pointers to it's left and right child
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // instantiate with the root node pointing to null
    this.root = null;
  }

  // O(log n)
  insert(value) {
    // instantiate a new node with the value passed in the argument
    const newNode = new Node(value);

    // if there is no root (no nodes on the tree), set the root to the new node
    if (!this.root) {
      this.root = newNode;
    } else {
      // set a pointer for the current node being checked starting at the root
      let currentNode = this.root;

      // iterate until we replace a node
      while (true) {
        // check left (value is less than the current node's value)
        if (value < currentNode.value) {
          // if there is no node on the left, insert the node at this spot and break the while loop
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }

          // otherwise traverse down left and set the current node to its left child
          currentNode = currentNode.left;
        // check right (value is greater than or equal to the current node's value)
        } else {
          // if there is no node on the right, insert the node at this spot and break the while loop
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }

          // otherwise traverse down right and set the current node to its right child
          currentNode = currentNode.right;
        }
      }
    }
  }

  // O(log n)
  lookup(value) {
    // if there is no root node, there is nothing to lookup therefore return null
    if (!this.root) {
      return null;
    }

    // pointer for the current node as we traverse through tree
    let currentNode = this.root;

    // until the current node returns null (node has no children)
    while (currentNode) {
      // if the target value is less than the current node's value
      if (value < currentNode.value) {
        // set the current node to its left child
        currentNode = currentNode.left;
      // otherwise if the target value is greater than the current node's value
      } else if (value > currentNode.value) {
        // set the current node to its right child
        currentNode = currentNode.right;
      } else {
        // if the current node's value is equal to the target value, return it
        return currentNode;
      }
    }

    // if the value was not found, return null
    return null;
  }
}

// SAMPLE BINARY SEARCH TREE
//       9
//     /   \
//    4     20
//   / \   /  \
//  1   6 15 170

// TEST CASES
const binaryTree = new BinarySearchTree();
binaryTree.insert(9);
console.log(binaryTree);
binaryTree.insert(4);
console.log(binaryTree);
binaryTree.insert(6);
console.log(binaryTree);
binaryTree.insert(20);
console.log(binaryTree);
binaryTree.insert(170);
console.log(binaryTree);
binaryTree.insert(15);
console.log(binaryTree);
binaryTree.insert(1);
console.log(binaryTree);
console.log(binaryTree.lookup(15)); // node with value of 15
console.log(binaryTree.lookup(7));  // null
