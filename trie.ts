class TrieNode {
  private children: TrieNode[] = [];
  private isEnd: boolean = false;

  constructor() {
    this.children = new Array(26);
  }

  public constainsKey(ch: string): boolean {
    return this.children[ch.charCodeAt(0) - "a".charCodeAt(0)] !== undefined;
  }
  public get(ch: string): TrieNode | undefined {
    return this.children[ch.charCodeAt(0) - "a".charCodeAt(0)];
  }
  public put(ch: string, node: TrieNode): void {
    this.children[ch.charCodeAt(0) - "a".charCodeAt(0)] = node;
  }
  public isEndNode(): boolean {
    return this.isEnd;
  }
  public setEndNode(): void {
    this.isEnd = true;
  }
}

export default class Trie {
  private root: TrieNode = new TrieNode();

  constructor() {
    this.root = new TrieNode();
  }

  public insert(word: string): void {
    let node: TrieNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const currentChar = word.charAt(i);
      if (!node.constainsKey(currentChar)) {
        node.put(currentChar, new TrieNode());
      }
      node = node.get(currentChar)!;
    }
    node.setEndNode();
  }

  public searchPrefix(word: string): TrieNode | null {
    let node: TrieNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const currentChar = word.charAt(i);
      if (node.constainsKey(currentChar)) {
        node = node.get(currentChar)!;
      } else {
        return null;
      }
    }
    return node;
  }

  public search(word: string): boolean {
    const node: TrieNode | null = this.searchPrefix(word);
    return node !== null && node.isEndNode();
  }
  public startsWith(prefix: string): boolean {
    const node: TrieNode | null = this.searchPrefix(prefix);
    return node !== null;
  }
}
