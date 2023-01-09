import { List } from "./List";

class SingleLinkedNode<T> {
  val: T;
  next: SingleLinkedNode<T> | null;
  constructor(val: T, next?: SingleLinkedNode<T>) {
    this.val = val;
    this.next = next ?? null;
  }
}

export class SingleLinkedList<T> implements List<T> {
  #size: number;
  #root: SingleLinkedNode<T> | null;
  #tail: SingleLinkedNode<T> | null;
  constructor() {
    this.#size = 0;
    this.#root = null;
    this.#tail = null;
  }
  remove(index: number): T {
    if (index >= this.#size || index < 0) throw new Error("Invalid index");
    let temp = this.#root;
    if (index === 0) {
      let t = this.#root.val;
      this.#root = this.#root.next;
      this.#size--;
      return t;
    }
    while (index > 1) {
      temp = temp.next;
      index--;
    }
    let t = temp.next.val;
    temp.next = temp.next.next ?? null;
    this.#size--;
    return t;
  }
  size(): number {
    return this.#size;
  }
  add(val: T, index?: number): boolean {
    const newNode = new SingleLinkedNode<T>(val);
    if (index != undefined) return this.#addAtIndex(newNode, index);
    if (this.#root == null) {
      this.#root = newNode;
      this.#tail = this.#root;
      this.#size += 1;
      return this.#root == newNode;
    }
    this.#tail!.next = newNode;
    this.#tail = newNode;
    this.#size += 1;
    return this.#tail == newNode;
  }
  #addAtIndex(node: SingleLinkedNode<T>, index: number): boolean {
    if (index > this.#size || index < 0) throw new Error("Invalid index");
    let temp = this.#root;
    if (index === 0) {
      node.next = this.#root;
      this.#root = node;
      this.#size++;
      return this.#root == node;
    }
    while (index > 1) {
      temp = temp.next;
      index--;
    }
    node.next = temp.next;
    temp.next = node;
    this.#size++;
    return temp.next == node;
  }
  toString(): string {
    let ans = "[";
    let temp = this.#root;
    while (temp?.next != null) {
      ans += temp.val + ", ";
      temp = temp.next;
    }
    ans += temp ? temp.val : "";
    ans += "]";
    return ans;
  }
  forEach(cb: (item: T) => void): void {
    let temp = this.#root;
    while (temp != null) {
      cb(temp.val);
      temp = temp.next;
    }
  }
  includes(val: T): boolean {
    let temp = this.#root;
    while (temp?.next != null) {
      if (temp.val === val) return true;
      temp = temp.next;
    }
    return false;
  }
}
