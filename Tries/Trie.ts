interface Tries {
  add(word: string): boolean;
  delete(word: string): void;
  contains(word: string): boolean;
  clear(): void;
  startsWith(prefix: string): boolean;
}

class TrieNode {
  map: Map<string, TrieNode>;
  isEndOfWord: boolean;
  constructor() {
    this.map = new Map<string, TrieNode>();
    this.isEndOfWord = false;
  }
}

export class Trie implements Tries {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }
  add(word: string): boolean {
    let temp: TrieNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!temp.map.has(word.charAt(i))) {
        temp.map.set(word.charAt(i), new TrieNode());
      }
      temp = temp.map.get(word.charAt(i));
    }
    temp.isEndOfWord = true;
    return temp.isEndOfWord;
  }
  delete(word: string): void {
    let temp: TrieNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!temp.map.has(word.charAt(i))) return;
      temp = temp.map.get(word.charAt(i));
    }
    temp.isEndOfWord = false;
  }
  contains(word: string): boolean {
    let temp: TrieNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!temp.map.has(word.charAt(i))) return false;
      temp = temp.map.get(word.charAt(i));
    }
    return temp.isEndOfWord;
  }
  clear(): void {
    this.root = new TrieNode();
  }
  startsWith(prefix: string): boolean {
    let temp: TrieNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!temp.map.has(prefix.charAt(i))) return false;
      temp = temp.map.get(prefix.charAt(i));
    }
    return true;
  }
}
