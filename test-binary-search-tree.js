'use strict';

let output;

const BinarySearchTree = require('./binary-search-tree');

const tree = new BinarySearchTree();
tree.insert(3, '3');
tree.insert(1, '1');
tree.insert(4, '4');
// tree.insert(6, '6');
tree.insert(9, '9');
tree.insert(2, '2');
tree.insert(5, '5');
tree.insert(7, '7');
// console.log(tree);
// console.log(tree.find(7));
// tree.remove(6);
// console.log(tree);



function heightBST(bst) {
  // return 0 when tree/node is null meaning no more children to check
  if (!bst) return 0;

  // call recursively with both children
  let leftheight = heightBST(bst.left);
  let rightheight = heightBST(bst.right);

  // return the higher height of the children adding 1 for the tree itself
  return (Math.max(leftheight, rightheight) + 1);
}

output = heightBST(tree);
console.log('heightBST: ', output);

function isBST(bst) {
  // return true if nothing to compare
  if (!bst) return true;

  // return false if tree has left child and the left child value is greater than the current value
  if (bst.left && bst.left.key > bst.key) return false;

  // return false if tree has right child and the right child value is less than the current value
  if (bst.right && bst.right.key < bst.key) return false;

  // call recursively since bst passes and we now need to check the children
  if (!isBST(bst.left) || !isBST(bst.right)) return false;

  // passed
  return true;
}

output = isBST(tree);
console.log('isBST: ', output);


let counter = 0;
function thirdLargestNode(bst) {
  if (!bst) return null;

  let t = thirdLargestNode(bst.right);

  if (counter !== 3) {
    counter++;
    t = bst;
  }

  if (counter === 3) {
    return t;
  } else {
    return thirdLargestNode(bst.left);
  }
}

output = thirdLargestNode(tree);
console.log(output.value);
