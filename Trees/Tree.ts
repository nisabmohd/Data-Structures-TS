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

export interface Tree<T> {
  insert(val: T): boolean;
  remove(val: T): T;
  includes(val: T, equal: (a: T, b: T) => boolean): boolean;
  inOrder(): T[];
  preOrder(): T[];
  postOrder(): T[];
}
