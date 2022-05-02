import java.util.HashMap;

class Solution {
  public String minWindow(String s, String t) {
      //sliding window
      //use hashmap to store each char count for s and t

      //iterate with right pointer from 0 until s.len()
      //count each letter and store in s hashmap
      //if the current letter count in t and s is the same, and cur letter is included in tmap
        //size of s ++ (ex: t = aab -> t size = 2)

      //when s size == t size
      //while left <= right && size of s == size of t
        //if len from left to right < min len
          //replace it with min len
        //reduce count of cur left letter
        //if tmap contains left letter, and s size < t size(since reduce count)
          //s size --
        //left move to next letter
      //return min len == Integer.Max_value? ""(empty string): s.substring(minright - min left + 1) -> needs to store min right and min left
      //time O(t+S) space O(t + S)
      //use intValue to compare data store in hashmap
    HashMap<Character, Integer> sMap = new HashMap<>();
    HashMap<Character, Integer> tMap = new HashMap<>();

    for (char tCh : t.toCharArray()) {
      tMap.put(tCh, tMap.getOrDefault(tCh, 0) + 1);
    }
    int tSize = tMap.size(), sSize = 0;
    int left = 0, minLeft = -1, minRight = -1, result = Integer.MAX_VALUE;

    for (int right = 0; right < s.length(); right++) {
      char cur = s.charAt(right);
      int count = sMap.getOrDefault(cur, 0) + 1;
      sMap.put(cur, count);
      if (tMap.containsKey(cur) && tMap.get(cur).intValue() == sMap.get(cur).intValue()) sSize++;

      while(left <= right && sSize == tSize) {
        if (right - left + 1 < result) {
          minLeft = left;
          minRight = right;
          result = right - left + 1;
        }
        char curLeft = s.charAt(left);
        int leftCount = sMap.get(curLeft) - 1;
        sMap.put(curLeft, leftCount);
        if (tMap.containsKey(curLeft) && sMap.get(curLeft).intValue() < tMap.get(curLeft).intValue()) sSize--;
        left ++;
      }
    }
    return result == Integer.MAX_VALUE? "": s.substring(minLeft, minRight+ 1);
  }
}