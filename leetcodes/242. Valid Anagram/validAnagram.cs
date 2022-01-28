public class Solution {
    public bool IsAnagram(string s, string t) {
      //use int[26] -> time O(n), spaceO(1)
      if (s.Length != t.Length) return false;
      int[] freq = new int[26];
      foreach( var c in s) freq[c - 'a'] ++;
      foreach(var c in t) {
        freq[c - 'a'] --;
        if (freq[c - 'a'] < 0) return false;
      }
      foreach( var f in freq) {
        if (f != 0) return false;
      }
      return true;
    }
}