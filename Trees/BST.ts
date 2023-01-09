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
  preOrder(): T[] {
    return super.preOrder(this.#root);
  }
  postOrder(): T[] {
    return super.postOrder(this.#root);
  }
  inOrder(): T[] {
    return super.inOrder(this.#root);
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
  includes(val: T, equal: (a: T, b: T) => boolean): boolean {
    return this.#includes(val, this.#root, equal);
  }
  #includes(
    val: T,
    node: BinaryTreeNode<T> | null,
    equal: (a: T, b: T) => boolean
  ) {
    if (node == null) return false;
    if (equal(node.val, val)) return true;
    return (
      this.#includes(val, node.left, equal) ||
      this.#includes(val, node.right, equal)
    );
  }
}
