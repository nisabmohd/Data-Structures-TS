export class Stack<T> {
  private arr: T[];
  constructor() {
    this.arr = [];
  }
  push(val: T): void {
    this.arr.push(val);
  }
  pop(): T | undefined {
    if (this.arr.length == 0) return undefined;
    return this.arr.pop();
  }
  get size(): number {
    return this.arr.length;
  }
}
