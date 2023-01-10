import { BinaryTree, BinaryTreeNode } from "./BinaryTree";
import { Tree } from "./Tree";

export class BinarySeachTree<T> extends BinaryTree<T> implements Tree<T> {
  #compare: (a: T, b: T) => number;
  #root: BinaryTreeNode<T> | null;
  #size: number;
  constructor(compare: (a: T, b: T) => number) {
    super();
    this.#compare = compare;
    this.#root = null;
    this.#size = 0;
  }
  get inorder(): T[] {
    return super.inOrder(this.#root);
  }
  get postorder(): T[] {
    return super.postOrder(this.#root);
  }
  get preorder(): T[] {
    return super.preOrder(this.#root);
  }
  insert(val: T): boolean {
    const node = new BinaryTreeNode<T>(val);
    let previousSize = this.#size;
    this.#root = this.#insert(node, this.#root);
    return this.#size - previousSize == 1;
  }
  #insert(
    node: BinaryTreeNode<T>,
    root: BinaryTreeNode<T> | null
  ): BinaryTreeNode<T> {
    if (root == null) {
      this.#size++;
      return node;
    }
    if (this.#compare(root.val, node.val) > 0) {
      root.left = this.#insert(node, root.left);
    } else if (this.#compare(root.val, node.val) < 0) {
      root.right = this.#insert(node, root.right);
    }
    return root;
  }
  remove(val: T): T {
    throw new Error("Method not implemented.");
  }
  includes(comparator: (a: T) => boolean): boolean {
    return this.#includes(this.#root, comparator);
  }
  #includes(node: BinaryTreeNode<T>, comparator: (a: T) => boolean): boolean {
    if (node == null) return false;
    if (comparator(node.val)) return true;
    return (
      this.#includes(node.left, comparator) ||
      this.#includes(node.right, comparator)
    );
  }
}
