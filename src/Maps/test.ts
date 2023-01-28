import { Map_ } from "./Map_";

// const map = new Map_<number[], string>();
// map.set([9, 9], "Nisab");
// const temp = [5, 9, 8];
// map.set(temp, "Bari");
// map.set([4, 5], "Konika");
// console.log(map.delete(temp));
// map.forEach((k, v) => console.log([k, v]));

const map = new Map_<number[], string>((a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
});
map.set([9, 9], "Nisab");
const temp = [5, 9, 8];
map.set(temp, "Bari");
map.set([4, 5], "Konika");
console.log(map.delete([...temp]));
map.forEach((k, v) => console.log([k, v]));
