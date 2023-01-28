export class Graph<T> {
  private adjMap: Map<T, T[]>;
  private bidirectional: boolean;
  constructor(bidirectional?: boolean) {
    this.bidirectional = bidirectional ?? true;
    this.adjMap = new Map<T, T[]>();
  }
  add = (a: T, b?: T): void => {
    if (!b) {
      if (!this.adjMap.has(a)) {
        this.adjMap.set(a, []);
      }
      return;
    }
    if (!this.adjMap.has(a)) {
      this.adjMap.set(a, []);
    }
    if (!this.adjMap.has(b)) {
      this.adjMap.set(b, []);
    }
    if (this.bidirectional) {
      this.adjMap.get(a)!.push(b);
      this.adjMap.get(b)!.push(a);
    } else {
      this.adjMap.get(a)!.push(b);
    }
  };
  bfs = (source?: T): T[][] | T[] => {
    if (source) return this.bfsHelper(source, new Set<T>());
    let vis = new Set<T>();
    let ans: T[][] = [];
    this.adjMap.forEach((_, key) => {
      if (!vis.has(key)) {
        ans.push(this.bfsHelper(key, vis));
      }
    });
    return ans;
  };
  private bfsHelper(source: T, vis: Set<T>): T[] {
    let ans: T[] = [];
    let queue = [source];
    vis.add(source);
    while (queue.length != 0) {
      let popped = queue.shift();
      ans.push(popped!);
      this.adjMap.get(popped!)!.forEach((item) => {
        if (!vis.has(item)) {
          vis.add(item);
          queue.push(item);
        }
      });
    }
    return ans;
  }
  dfs = (source?: T): T[][] | T[] => {
    if (source) {
      return this.dfsHelper(source, new Set<T>());
    }
    let arr: T[][] = [];
    const vis = new Set<T>();
    this.adjMap.forEach((_, key) => {
      if (!vis.has(key)) {
        arr.push(this.dfsHelper(key, vis));
      }
    });
    return arr;
  };
  private dfsHelper(source: T, vis: Set<T>): T[] {
    vis.add(source);
    let arr: T[] = [source];
    this.adjMap.get(source)!.forEach((item) => {
      if (!vis.has(item)) {
        arr.push(...this.dfsHelper(item, vis));
      }
    });
    return arr;
  }
}
