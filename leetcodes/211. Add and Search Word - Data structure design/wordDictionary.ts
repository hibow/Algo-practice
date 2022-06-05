class TrieNode {
  isEnd: boolean
  children: Array<TrieNode>
  constructor() {
    this.children= new Array(26)
    this.isEnd = false
  }
}


class WordDictionary {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  addWord(word: string): void {
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
    return this.match(word, 0, node)
  }
  match(word: string, idx:number, curNode: TrieNode):boolean{
    //check isEnd when finished word iteration
    if (word.length == idx) return curNode.isEnd
    //if not .
    if (word[idx] != '.') {
      //check if curNode contains word[idx]
      let c: number = word.charCodeAt(idx)
      let index: number = c - 'a'.charCodeAt(0)
      if(curNode.children[index]) {
        return this.match(word, idx+1, curNode.children[index])
      }
      //return match(word, idx+1, curNode.children[index])
      //else false
      //else
    } else {
      //iterate over curNode.children
      for (let i = 0; i < curNode.children.length; i++ ){
        //if curNode.children[i] && match(word, idx+1, curNode.children[i])
        if (curNode.children[i] && this.match(word, idx+1, curNode.children[i]))
        return true
      }
       //return true
       //else false
    }
    return false
  }
}

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/

//above runtime error for out of memory? using array and recursive way

class WordDictionary {
  isWord: boolean;
  child: {[Key: string]: WordDictionary};
  constructor() {
      this.child = {};
      this.isWord = false;
  }

  addWord(word: string): void {
      let curr: WordDictionary = this;
      for(const c of word) {
          if(!curr.child[c]) {
              curr.child[c] = new WordDictionary();
          }
          curr = curr.child[c];
      }
      curr.isWord = true;
  }

  search(word: string, i = 0): boolean {
      let curr: WordDictionary = this;
      for(;i < word.length; i++) {
          const c = word[i];
          if(c !== '.') {
              if(!curr.child[c]) {
                  return false;
              }
              curr = curr.child[c];
          } else {
              for(const key in curr.child) {
                  if(curr.child[key].search(word, i + 1)){
                      return true;
                  };
              }
              return false;
          }
      }
      return curr.isWord;
  }
}