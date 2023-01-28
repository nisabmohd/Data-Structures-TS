import { Heap } from "./Heap";

// max heap
const heap = new Heap<number>((a, b) => a - b);
heap.add(54);
heap.add(24);
heap.add(4);
heap.add(99);
heap.add(45);
heap.add(93);
console.log(heap.size);
console.log(heap.peek());
while (heap.size) {
  console.log("polled -> " + heap.extract());
}
console.log(heap.size);
