import { Trie } from "./Trie";

const trie = new Trie();
trie.add("apply");
trie.add("app");
trie.add("apple");
trie.delete("apply");
console.log(trie.contains("apply"));
console.log(trie.contains("app"));
console.log(trie.contains("apple"));
