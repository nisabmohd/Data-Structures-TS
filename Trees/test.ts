import { BinarySeachTree } from "./BST";

const bst = new BinarySeachTree<number>((a, b) => a - b);

bst.insert(55);
bst.insert(45);
bst.insert(955);
bst.insert(5);
console.log(bst.includes((a) => a == 5));

console.log(bst.inorder);
console.log(bst.preorder);
console.log(bst.postorder);
