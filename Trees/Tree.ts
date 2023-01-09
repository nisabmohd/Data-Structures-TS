export interface Tree<T> {
  insert(val: T): boolean;
  remove(val: T): T;
  includes(val: T, equal: (a: T, b: T) => boolean): boolean;
}
