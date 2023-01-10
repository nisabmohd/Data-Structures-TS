import { Map_ } from "./Map_";

const map = new Map_<number[], string>();
map.set([9, 9], "Nisab");
const temp = [5, 9, 8];
map.set(temp, "Bari");
map.set([4, 5], "Konika");
console.log(map.delete(temp));
map.forEach((k, v) => console.log([k, v]));
