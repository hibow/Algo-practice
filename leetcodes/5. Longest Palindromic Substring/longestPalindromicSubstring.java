class Solution {
  public String longestPalindrome(String s) {
    //input string, output: string
    //time O(n^2), space O(1)
    //use left and right iterate over the string with the same index
      //char c = cur char of left and right
      //while left in boundary and cur char is c, left --
      //while right in boundary and cur char is c, right ++
      //while left, right in boundary
        //if cur char is not the same, break
        //left --, right ++
      //left = left + 1
      //if end - start < right - left => start = left, end = right
    //return s.substring(start, end)
    int start = 0;
    int end = 0;
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      int left = i;
      int right = i;
      while(left >=0 && s.charAt(left) == c){
        left --;
      }
      while(right<s.length() && s.charAt(right) == c) {
        right++;
      }
      while(left >=0 && right < s.length()) {
        if (s.charAt(left) != s.charAt(right)) break;
        left --;
        right ++;
      }
      left = left + 1;
      if (end - start < right - left) {
        end = right;
        start = left;
      }
    }
    return s.substring(start, end);
  }
}