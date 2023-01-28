import { Set_ } from "./Set_";

const set = new Set_<number>();

set.add(99);
set.add(98);
set.add(45);
set.add(76);
console.log(set.has(45));
set.forEach((item) => console.log(item));

set.delete(45);
console.log(set.has(45));
set.forEach((item) => console.log(item));
