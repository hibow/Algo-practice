class TrieNode {
  isEnd: boolean
  children: Array<TrieNode>
  constructor() {
    this.children= new Array(26)
    this.isEnd = false
  }
}



class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()

  }

  insert(word: string): void {
    let node = this.root
    for (let i = 0; i <= word.length-1 ; i++) {
      let c: number = word.charCodeAt(i)
      let index: number = c - 'a'.charCodeAt(0)
      if (node.children[index] == null) {
        node.children[index] = new TrieNode()
      }
      node = node.children[index]
    }
      node.isEnd = true
  }

  search(word: string): boolean {
    let node = this.root
    for (let i = 0; i<= word.length - 1; i++) {
      let c: number = word.charCodeAt(i)
      let index: number = c - 'a'.charCodeAt(0)
      if (node.children[index] == null) return false
      node = node.children[index]
    }
    return node.isEnd
  }

  startsWith(prefix: string): boolean {
    let node = this.root
    for (let i = 0; i<= prefix.length - 1; i++) {
      let c: number = prefix.charCodeAt(i)
      let index: number = c - 'a'.charCodeAt(0)
      if (node.children[index] == null) return false
      node = node.children[index]
    }
    return true
  }
}

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/