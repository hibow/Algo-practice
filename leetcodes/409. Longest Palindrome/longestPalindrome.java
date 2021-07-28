class Solution {
  public int longestPalindrome(String s) {
    int[] cnts = new int[256];
    for (char c : s.toCharArray()) {
      cnts[c]++;
    }
    int palindrome = 0;
    for (int cnt : cnts) {
      palindrome += (cnt / 2) * 2;
      if (palindrome % 2 == 0 && cnt % 2 == 1) {
        palindrome++;
      }
    }
    return palindrome;
  }
}

// time O(n), space O(1)-> int[256]
// bit complexity model -> requires O(logN) bits to store the count value