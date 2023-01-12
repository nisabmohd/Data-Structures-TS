import { Heap } from "./Heap";

const heap = new Heap<number>((a, b) => a - b);

heap.add(45);
heap.add(99);
heap.add(1);
heap.add(5);
heap.add(9);
heap.add(121);
heap.display();
heap.poll();
heap.display();
