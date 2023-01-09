import { SingleLinkedList } from "./SingleLinkedList";

// const list = new SingleLinkedList<number>();
// list.add(5);
// list.add(15);
// list.add(99);
// // list.add(1, 0);
// list.add(185, 3);
// list.add(45, 0);
// console.log(list.toString());
// list.remove(0);
// console.log(list.toString());
// list.remove(0);
// console.log(list.toString());
// list.remove(0);
// console.log(list.toString());
// list.remove(0);
// console.log(list.toString());
// list.remove(0);
// console.log(list.toString());
// list.remove(0);
// console.log(list.toString());
// console.log(list.toString());

// list.forEach((item) => console.log(item));

const list = new SingleLinkedList<number[]>();
const arr = [1, 2, 3];
list.add(arr);
list.add([1, 2, 3, 4]);
list.add([1, 2, 3, 4, 5]);
console.log(list.includes(arr));
