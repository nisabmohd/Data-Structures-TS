import { Map_ } from "../Maps/Map_";

interface Set__<T> {
  add(value: T): void;
  clear(): void;
  delete(value: T): boolean;
  forEach(cb: (value: T) => void): void;
  has(value: T): boolean;
  readonly size: number;
}

export class Set_<T> implements Set__<T> {
  #map: Map_<T, null>;
  constructor(equals?: (a: T, b: T) => boolean) {
    if (equals) {
      this.#map = new Map_<T, null>(equals);
    } else {
      this.#map = new Map_<T, null>((a: T, b: T) => a === b);
    }
  }
  add(value: T): void {
    this.#map.set(value, null);
  }
  clear(): void {
    this.#map.clear();
  }
  delete(value: T): boolean {
    return this.#map.delete(value);
  }
  forEach(cb: (value: T) => void): void {
    this.#map.forEach((item) => {
      cb(item);
    });
  }
  has(value: T): boolean {
    return this.#map.has(value);
  }
  get size(): number {
    return this.#map.size;
  }
}
