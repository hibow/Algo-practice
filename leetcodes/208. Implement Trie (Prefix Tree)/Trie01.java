class TrieNode {
  //links array with TrieNode type
   public TrieNode[] links = new TrieNode[26];

  //boolean isEnd for the end of words
    public boolean isEnd;
  //initialize constructor
    public TrieNode() {}
}

public class Trie01 {
  // delcare TrieNode root
  private TrieNode root;
  //initialize Trie() constructor
  public Trie01() {
    root = new TrieNode();
  }

public void insert (String word) {
  //declare void insert word method, time: O(n), length of word; space O(1)
  TrieNode curNode = root;
  //start from root as current node
  for (int i=0; i<word.length(); i++) {
    //iterate over the words
    char c = word.charAt(i);
    //get character c
    if(curNode.links[c-'a'] == null){
      //if root.links[c-'a'] equals to null
      curNode.links[c-'a'] = new TrieNode();
      //assign new TrieNode to that element
    }
    curNode = curNode.links[c-'a'];
    //assign element to root if it's not null
  }
  curNode.isEnd = true;
  //set current TrieNode.isEnd is true since words is ended
}
  public boolean search(String word) {
    //declare boolean search word method, time O(n): word length; space O(1)
    TrieNode curNode = root;
    //set current node as root
    for (int i = 0; i < word.length(); i++) {
      //iterate over the weordds
       char c = word.charAt(i);
      //get character from current char as c
      if (curNode.links[c-'a'] == null) return false;
      //if current TrieNode.links[c-'a'] is null, return false
      curNode = curNode.links[c-'a'];
      //assign element to root if it's not null
    }
      return curNode.isEnd;
    //return current TrieNode.isEnd value
  }

  public boolean startsWith(String prefix) {
    //declare startsWith prefix method time O(m): prefix length
    TrieNode curNode = root;
    //set current node as root
    for (int i = 0; i < prefix.length(); i++) {
      //iterate over the prefix
      char c = prefix.charAt(i);
      //get character from current char c
      if (curNode.links[c-'a'] == null) return false;
      //if current TrieNode.links[c-'a'] is null, reurn false
      curNode = curNode.links[c-'a'];
      //otherwise, it will assign current element to next TrieNode
    }
    return true;
    //return true if there is no break
  }
}

