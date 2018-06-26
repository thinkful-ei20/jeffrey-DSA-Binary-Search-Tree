'use strict';

const BinarySearchTree = require('./binary-search-tree');

const tree = new BinarySearchTree();
tree.insert(3, '3');
tree.insert(1, '1');
tree.insert(4, '4');
tree.insert(6, '6');
tree.insert(9, '9');
tree.insert(2, '2');
tree.insert(5, '5');
tree.insert(7, '7');
console.log(tree);
console.log(tree.find(7));
tree.remove(6);
console.log(tree);
