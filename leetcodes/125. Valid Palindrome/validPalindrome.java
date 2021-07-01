class Solution {
    public boolean isPalindrome(String s) {
      s=s.replaceAll("[^a-zA-Z0-9]", "");
      int len = s.length();
      for (int i = 0, j = len -1; i < len/2; i++, j--){
        if (Character.toLowerCase(s.charAt(i)) != Character.toLowerCase(s.charAt(j))) return false;
      }
      return true;
    }
}
/***
      public boolean isPalindrome(String s) {
        char[] charMap = new char[256];
        for (int i = 0; i < 10; i++)
            charMap['0'+i] = (char) (1+i);  // numeric - don't use 0 as it's reserved for illegal chars
        for (int i = 0; i < 26; i++)
            charMap['a'+i] = charMap['A'+i] = (char) (11+i);  //alphabetic, ignore cases, continue from 11

        for (int start = 0, end = s.length()-1; start < end;) {
            if (charMap[s.charAt(start)] == 0)
                start++;
            else if (charMap[s.charAt(end)] == 0)
                end--;
            else if (charMap[s.charAt(start++)] != charMap[s.charAt(end--)])
                return false;
        }
        return true;
    }
 */
