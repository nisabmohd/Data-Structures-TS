export class Queue<T> implements Queues<T> {
  private arr: T[];
  constructor() {
    this.arr = [];
  }
  add(val: T): void {
    this.arr.push(val);
  }
  delete(): T | undefined {
    const [deleted, ...rest] = this.arr;
    this.arr = rest;
    return deleted;
  }
  get size(): number {
    return this.arr.length;
  }
  forEach(cb: (item: T) => void): void {
    this.arr.forEach((item) => {
      cb(item);
    });
  }
}
