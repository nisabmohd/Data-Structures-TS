export class BinaryTreeNode<T> {
  val: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
  constructor(val: T, left?: BinaryTreeNode<T>, right?: BinaryTreeNode<T>) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

export class BinaryTree<T> {
  preOrder(node: BinaryTreeNode<T> | null): T[] {
    if (node == null) return [];
    let arr: T[] = [];
    arr.push(node.val);
    arr.push(...this.preOrder(node.left));
    arr.push(...this.preOrder(node.right));
    return arr;
  }
  postOrder(node: BinaryTreeNode<T> | null): T[] {
    if (node == null) return [];
    let arr: T[] = [];
    arr.push(...this.postOrder(node.left));
    arr.push(...this.postOrder(node.right));
    arr.push(node.val);
    return arr;
  }
  inOrder(node: BinaryTreeNode<T> | null): T[] {
    if (node == null) return [];
    let arr: T[] = [];
    arr.push(...this.inOrder(node.left));
    arr.push(node.val);
    arr.push(...this.inOrder(node.right));
    return arr;
  }
}

const root = new BinaryTreeNode<string>("Nisab");
const node1 = new BinaryTreeNode<string>("Koni");
const node2 = new BinaryTreeNode<string>("Joe");
const node3 = new BinaryTreeNode<string>("John");
const node4 = new BinaryTreeNode<string>("Tom");
const node5 = new BinaryTreeNode<string>("Harry");

root.left = node1;
root.right = node2;
node1.left = node3;
node3.left = node4;
node2.left = node5;

const binaryTree = new BinaryTree<typeof root.val>();

console.log(binaryTree.inOrder(root));
