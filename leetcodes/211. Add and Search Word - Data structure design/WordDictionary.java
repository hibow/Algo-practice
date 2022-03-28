class TrieNode { //slower than js solution
  //links array with TrieNode type
  public TrieNode[] links = new TrieNode[26];

  //boolean isEnd for the end of words
    public boolean isEnd;
  //initialize constructor
    public TrieNode() {}
}

class WordDictionary {
  private TrieNode root;
  //constructor
  public WordDictionary() {
    root = new TrieNode();
  }
  public void addWord(String word){
    TrieNode curNode = root;
    for (int i = 0; i<word.length(); i++) {
      char c = word.charAt(i);
      if (curNode.links[c-'a'] ==  null) {
        curNode.links[c-'a'] = new TrieNode();
      }
      curNode = curNode.links[c-'a'];
    }
    curNode.isEnd = true;
  }
  public boolean search(String word){
    return match(word, 0, root);
  }

  //back track
  private boolean match(String word, int index, TrieNode curNode){
    //if index equals to word counts, it means over the boundary -> return current node's isEnd value
    if (index == word.length()) {
      return curNode.isEnd;
    }
    //if current chartAtindex is '.'
    if (word.charAt(index) != '.') {
      if (curNode.links[word.charAt(index) - 'a'] != null) {
        //if current element is not null
        return match(word, index+1, curNode.links[word.charAt(index) - 'a']);
        //return search next index of the word with current node
      }
      //else
    } else {
      //boolean result = true;
      //iterate over the current node links[26]
      for (int i = 0; i < curNode.links.length; i++) {
        //if current element is not null
        if (curNode.links[i] != null && match(word, index + 1, curNode.links[i])) {
          return true;
          //check with all occurrences of the not null character when . is encountered then return search next index of word, with current element
        }
      }
    }
    return false;
  }

}
