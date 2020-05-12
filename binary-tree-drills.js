/* eslint-disable strict */

const BinaryTree = require('./binary-tree');

function main() {
  const BST = new BinaryTree();
  const letters = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
  const numbers = [3, 1, 4, 6, 9, 2, 5, 7];
  numbers.forEach((num) => BST.insert(num));
  letters.forEach((letter) => BST.insert(letter));

  //   BST.insert(1);
  //   BST.insert(4);
  //   BST.insert(6);
  //   BST.insert(9);
  //   BST.insert(2);
  //   BST.insert(5);
  //   BST.insert(7);
  return BST;
}

console.log(main());

function heightOfBiTree(tree) {
  if (!tree) {
    return 0;
  }
  if (!tree.left || !tree.right) {
    return 1;
  }
  let height = 0;
  if (tree.right) {
    let rightHeight = 1 + heightOfBiTree(tree.right);
    if (rightHeight > height) {
      height = rightHeight;
    }
    if (tree.left) {
      let leftHeight = 1 + heightOfBiTree(tree.left);
      if (leftHeight > height) {
        height = leftHeight;
      }
      return height;
    }
  }
}

console.log(heightOfBiTree(main()));
