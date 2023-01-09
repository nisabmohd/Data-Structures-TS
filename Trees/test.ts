import { BinarySeachTree } from "./BST";

const bst = new BinarySeachTree<number>((a, b) => a - b);

bst.insert(55);
bst.insert(45);
bst.insert(955);
bst.insert(5);
// bst.traverse();
console.log(bst.includes(45, (a, b) => a == b));

console.log(bst.inOrder());
