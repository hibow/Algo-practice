class Solution {
  public boolean exist(char[][] board, String word) {
    //search each element and compare with word until all words found then return true
    //DFS time O(M*N*4^L) space call stack: O(min (m * n, length of word))
    for (int r = 0; r < board.length; r++) {
      for (int c = 0; c<board[0].length; c++) {
        if(board[r][c] == word.charAt(0) && dfs(board, word, 0, r, c)) return true;
      }
    }
    return false;
  }
  public boolean dfs(char[][] b, String word, int start, int r, int c){
    //if finished searching all words, return true
    if (word.length() <= start) return true;
    //if out of boundary, or letter is seen or not equal to the word retrun false
    if (r<0 || c<0 || r>=b.length || c>=b[0].length || b[r][c] == '0' || b[r][c] != word.charAt(start)) return false;
    //set it to seen
    char temp = b[r][c];
    b[r][c] = '0';
    //traverse all 4 sides for next letter, if works return true
    if (dfs(b, word, start+1, r+1, c) ||
        dfs(b, word, start+1, r, c+1) ||
        dfs(b, word, start+1, r-1, c) ||
        dfs(b, word, start+1, r, c-1)) return true;
    //set it to unseen
    b[r][c] = temp;
    return false;
  }
}