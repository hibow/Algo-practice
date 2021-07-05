import java.util.HashMap;

class Solution {
  public boolean isAnagram(String s, String t) {
    // input: string, string
    // output: boolean -> if they are anagram
    // edge case: at least string length is 1
    // 1. Anagram -> same length -> sorting character and compare if they are equal
    // sorting time O(nlogn) , comparison time O(n);
    // space O(n) to copy string
    // 2. Hashmap -> if all english letters (lowercase) -> create int[26]
    // iterate over s and add counts in the map; iterate over t and reduce count in
    // the table
    // if count < 0 return false
    // Time: O(n), space O(1)-> if int[]; space O[n] for regular hashmap
    if (s == null || t == null)
      return false;
    if (s.length() != t.length())
      return false;
    HashMap<Character, Integer> strMap = new HashMap<>();

    for (int i = 0; i < s.length(); i++) {
      strMap.put(s.charAt(i), strMap.getOrDefault(s.charAt(i), 0) + 1);
      strMap.put(t.charAt(i), strMap.getOrDefault(t.charAt(i), 0) - 1);
    }
    for (char c : strMap.keySet()) {
      if (strMap.get(c) != 0)
        return false;
    }
    return true;

  }
}