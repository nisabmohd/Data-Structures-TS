import { SingleLinkedList } from "./SingleLinkedList";

const list = new SingleLinkedList<number>();
list.add(5);
list.add(15);
list.add(99);
list.add(185, 3);
list.add(45, 0);
console.log(list.toString());
list.remove(0);
console.log(list.toString());
list.remove(0);
console.log(list.toString());
list.remove(0);
console.log(list.toString());
list.remove(0);
console.log(list.toString());
list.remove(0);
console.log(list.toString());
list.remove(0);
console.log(list.toString());
console.log(list.toString());

list.forEach((item) => console.log(item));

console.log(
  list.includes((item) => item == 99),
  list.includes((item) => item == 45),
  list.includes((item) => item == 991)
);
