export interface Tree<T> {
  insert(val: T): boolean;
  remove(val: T): T;
  includes(comparator: (a: T) => boolean): boolean;
}
