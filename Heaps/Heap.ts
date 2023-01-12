interface Heaps<T> {
  add(val: T): boolean;
  poll(): T;
  peek(): T | undefined;
  readonly size: number;
}

export class Heap<T> implements Heaps<T> {
  private list: (T | null)[];
  private comparator: (a: T, b: T) => number;
  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
    this.list = [];
    this.list.push(null);
  }
  add(val: T): boolean {
    let prevSize = this.list.length;
    this.list.push(val);
    let i = this.list.length - 1;
    while (i > 1) {
      let parentindex = i / 2;
      let compare = this.comparator(this.list[i], this.list[parentindex]);
      if (compare > 1) {
        let temp = this.list[i];
        this.list[i] = this.list[parentindex];
        this.list[parentindex] = temp;
        i = parentindex;
      } else break;
    }
    return this.size - prevSize == 1;
  }
  poll(): T {
    let [first, deleted, ...rest] = this.list;
    let lastElem = rest.pop();
    this.list = [first, lastElem, ...rest];
    let i = 1;
    while (i < this.list.length - 1) {
      let leftIndex = 2 * i;
      let rightIndex = 2 * i + 1;
      let index = i;
      if (
        leftIndex < this.list.length &&
        this.comparator(this.list[leftIndex], this.list[i]) > 0
      ) {
        index = leftIndex;
      }
      if (
        rightIndex < this.list.length &&
        this.comparator(this.list[rightIndex], this.list[i]) > 0
      ) {
        index = rightIndex;
      }
      if (index != i) {
        let temp = this.list[index];
        this.list[index] = this.list[i];
        this.list[i] = temp;
        i = index;
      } else break;
    }
    return deleted;
  }
  peek(): T | undefined {
    return this.list.length == 1 ? undefined : this.list[1];
  }
  get size(): number {
    return this.list.length - 1;
  }
}
