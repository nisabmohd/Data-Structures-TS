import { Trie } from "./Trie";

const trie = new Trie();

console.log(trie.add("app"));
console.log(trie.add("apply"));
// console.log(trie.contains("app"));
// console.log(trie.contains("apply"));

// console.log(trie.startsWith("app"));
// console.log(trie.startsWith("apply"));

// trie.delete("apply");
// console.log(trie.startsWith("app"));
// console.log(trie.startsWith("apply"));

trie.delete("apply");
console.log(trie.contains("apply"));
console.log(trie.startsWith("app"));
console.log(trie.startsWith("apply"));

// console.log(trie.contains("app"));
// console.log(trie.contains("apply"));
