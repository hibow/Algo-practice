/**
 * Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.

linked list for each character of word
time O(n)
space O(n) -> linked list

explains of trie:
one node maps to different characters, they are different links to next characters and become new nodes to map the next.
node[c]
or node.children[c] -> limite the children size to 26 (lowercase characters)
 */

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (let c of word) {
    if (node[c] === undefined) {
      node[c] = {};
    }
    node = node[c];
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root;
  for (let c of word) {
    if (node[c] !== undefined) {
      node = node[c];
    } else {
      return false;
    }
  }
  if (node.isEnd === undefined) return false;
  return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (let c of prefix) {
    if (node[c] !== undefined) {
      node = node[c];
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

//solution2
let ALPHAPET_SIZE = 26;

class TrieNode
{
    constructor()
    {
      this.isEndOfWord = false;
      this.children = new Array(ALPHAPET_SIZE);
      for (let i = 0; i < ALPHAPET_SIZE; i++) {
        this.children[i] = null;
      }
    }
}

let root;

function insert(key) {
  let level;
  let length = key.length;
  let index;
  let pCrawl = root;
  for (level = 0; level < length; level++){
    index = key[level].charCodeAt(0) -'a'.charCodeAt(0);
    if (pCrawl.children[index] == null)
      pCrawl.children[index] = new TrieNode;

    pCrawl = pCrawl.children[index];
    //root move to next node
  }
  //final word
  pCrawl.isEndOfWord = true;
}

function search(key){
  let level;
  let length = key.length;
  let index;
  let pCrawl = root;
  for (level = 0; level < length; level++){
    index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
    if (pCrawl.children[index] == null) return false;

    pCrawl = pCrawl.children[index];
    //if not null, root moves to next node to search
  }
//it searches for word not prefix
  return (pCrawl.isEndOfWord);
  //if prefix, just return true
}