export interface List<T> {
  readonly size: number;
  add(val: T, index?: number): boolean;
  includes(comparator: (a: T) => boolean): boolean;
  toString(): string;
  forEach(cb: (item: T) => void): void;
  remove(index: number): T;
  get(index: number): T;
}
