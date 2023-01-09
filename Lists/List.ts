export interface List<T> {
  size(): number;
  add(val: T, index?: number): boolean;
  includes(val: T): boolean;
  toString(): string;
  forEach(cb: (item: T) => void): void;
  remove(index: number): T;
  get(index: number): T;
}
