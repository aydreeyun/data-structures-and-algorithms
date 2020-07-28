class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);

node4.left = node2;
node4.right = node6;
node2.left = node1;
node2.right = node3;
node6.left = node5;
node6.right = node7;

console.log(node4);
//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

// BREADTH FIRST SEARCH
const bfs = (root) => {
  const arr = [];
  const queue = [root];

  while (queue.length) {
    const currentNode = queue.shift();

    arr.push(currentNode.val);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return arr;
}

console.log(bfs(node4));

// DEPTH FIRST SEARCH
// PREORDER
const predfs = (root, arr = []) => {
  if (!root) return;

  arr.push(root.val);
  predfs(root.left, arr);
  predfs(root.right, arr);
  
  return arr;
}

// INORDER
const indfs = (root, arr = []) => {
  if (!root) return;

  indfs(root.left, arr);
  arr.push(root.val);
  indfs(root.right, arr);

  return arr;
}

// POSTORDER
const postdfs = (root, arr = []) => {
  if (!root) return;

  postdfs(root.left, arr);
  postdfs(root.right, arr);
  arr.push(root.val);

  return arr;
}

console.log(predfs(node4));   // [4, 2, 1, 3, 6, 5, 7]
console.log(indfs(node4));    // [1, 2, 3, 4, 5, 6, 7]
console.log(postdfs(node4));  // [1, 3, 2, 5, 7, 6, 4]
