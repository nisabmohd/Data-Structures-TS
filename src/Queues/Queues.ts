interface Queues<T> {
  add(val: T): void;
  delete(): T | undefined;
  readonly size: number;
  forEach(cb: (item: T) => void): void;
}
