/**
 * Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.
 */

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.root = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (let c of word) {
    if (!node[c]) {
      node[c] = {};
    }
    node = node[c];
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  //search to see if it matched
  //helper function -> will return true and false
  var isMatched = function(cur, count) {
    /**
     * @param {Object} cur
     * current node
     * @param {number} count
     * current count of word
     * @return {boolean}
     */
    //false case: when current node(character object) is null or when it searches til the end of word but isEnd is not true
    if (!cur || (count === word.length && !cur.isEnd)) {
      return false;
    }
    //true case: search til the end of word and isEnd is true
    if (count === word.length && cur.isEnd) {
      return true;
    }
    //other case #1: when character is '.' -> will search for all 26 characters if it is in the current obj (recursion)
    //start from next character
    if (word[count] === ".") {
      for (let i = 0; i < 26; i++) {
        var ch = String.fromCharCode(97 + i);
        if (isMatched(cur[ch], count + 1)) {
          return true;
        }
      }
      //if none of them work, return false
      return false;
    }
    //other case #2: check each character to see if it matched
    return isMatched(cur[word[count]], count + 1);
  };
  return isMatched(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
