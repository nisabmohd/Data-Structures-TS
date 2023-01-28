import { Queue } from "./Queue";

const queue = new Queue<number>();

queue.add(5);
queue.add(6);
queue.add(7);
queue.add(8);
queue.add(9);
queue.forEach((item) => console.log(item));
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());
