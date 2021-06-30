import java.util.HashMap;

class Solution {
  public int lengthOfLongestSubstring(String s) {
    // input: string
    // output: integer
    // edge case: string contains space, symbol, letters, length at least 0
    /**
     * test case: "abcabcbb" = 3 "pwwkew" = 3 "bbbbb" =1 "" = 0, "abba" = 2
     */
    // edge case: if s length is 0 return 0
    if (s.length() == 0)
      return 0;
    // create hashMap <character, integer> to store based on where end pointer
    // locates at
    HashMap<Character, Integer> dataMap = new HashMap<Character, Integer>(); // or change to int[N]
    // set start , end pointer for calculation the length of substring
    // set start pointer to 0
    // set maxLen to 0
    int maxLen = 0;
    // set maxLen to store max of substring length
    // iterate over the string with end pointer
    int start = 0;
    for (int end = 0; end < s.length(); end++) {
      // if map.containsKey(s[end]) -> this character is defined in map
      if (dataMap.containsKey(s.charAt(end))) {
        // start move to next element -> dataMap.get(s.charAt(end)) + 1 , it should be
        // larger than start, otherwise, it won't change ex: abba
        start = Math.max(start, dataMap.get(s.charAt(end)) + 1);
      }
      dataMap.put(s.charAt(end), end);
      maxLen = Math.max(maxLen, end - start + 1);
    }
    // always update map -> map.put(s[end], end)
    // return maxLen
    return maxLen;
  }
}