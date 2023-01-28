// Map is already deffined in Typescript hence Map_ is used for custom implementation
interface Map__<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach(cb: (key: K, value: V) => void): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): void;
  readonly size: number;
}
class Bucket<K, V> {
  key: K;
  val: V;
  constructor(key: K, val: V) {
    this.key = key;
    this.val = val;
  }
}
export class Map_<K, V> implements Map__<K, V> {
  #bucket: Bucket<K, V>[][];
  #size: number;
  #hashCode(key: K): number {
    return JSON.stringify(key).length % this.#bucket.length;
  }
  #equals: (a: K, b: K) => boolean;
  constructor(equals?: (a: K, b: K) => boolean) {
    this.#bucket = new Array(17).fill(null);
    this.#size = 0;
    if (equals) {
      this.#equals = equals;
    } else {
      this.#equals = (a: K, b: K): boolean => {
        return a === b;
      };
    }
  }
  clear(): void {
    this.#bucket = new Array(17).fill(null);
  }
  forEach(cb: (key: K, value: V) => void): void {
    this.#bucket.forEach((chain) => {
      if (chain != null) {
        chain.forEach((item) => cb(item.key, item.val));
      }
    });
  }
  get(key: K): V | undefined {
    let val: V | undefined = undefined;
    this.#bucket.forEach((chain) => {
      if (val) return;
      if (chain != null) {
        chain.forEach((item) => {
          if (this.#equals(item.key, key)) {
            val = item.val;
            return;
          }
        });
      }
    });
    return val;
  }
  set(key: K, value: V): void {
    const hash: number = this.#hashCode(key);
    if (this.#bucket[hash] == null) {
      this.#bucket[hash] = [new Bucket<K, V>(key, value)];
      return;
    }
    this.#bucket[hash].forEach((item) => {
      if (this.#equals(item.key, key)) {
        item.val = value;
        return;
      }
    });
    this.#bucket[hash].push(new Bucket<K, V>(key, value));
  }
  delete(key: K): boolean {
    const hash: number = this.#hashCode(key);
    if (this.#bucket[hash] == null) return false;
    const prevSize = this.#bucket[hash].length;
    this.#bucket[hash] = this.#bucket[hash].filter(
      (item) => !this.#equals(item.key, key)
    );
    return prevSize - this.#bucket[hash].length == 1;
  }
  has(key: K): boolean {
    const hash: number = this.#hashCode(key);
    if (this.#bucket[hash] == null) {
      return false;
    }
    return (
      this.#bucket[hash].filter((item) => this.#equals(item.key, key)).length !=
      0
    );
  }
  get size(): number {
    return this.#size;
  }
}
