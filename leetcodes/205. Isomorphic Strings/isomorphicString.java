import java.util.Map;

class Solution {
  public boolean isIsomorphic(String s, String t) {
    /**
     * 
     * 1) store index time : O(N) put index into char hashmap egg -> e:[0], g: [1,
     * 2] add -> a:[0], d:[1,2] paper -> p: [0,2], a:[1], e:[3], r:[4] -> space O(N)
     * then iterate both sMap and tMap to verify their value for each key is the
     * same if not return false return true
     * 
     * or put it into array, compare if same index has same
     * 
     * 2) store character time O(N) put char into char hashmap space O(N) t[i] to
     * sMap, s[i] to tMap if (sMap[t[i]] != s[i], tMap[s[i]]!= t[i] ) return false
     * return true (or use Map to store all chars and use Set to store t chars->
     * O(N))
     * 
     */

    Map<Character, Character> map = new HashMap<>();
    Set<Character> assignedValues = new HashSet<>();
    for (int i = 0; i < s.length(); i++) {
      if (map.containsKey(s.charAt(i)) && map.get(s.charAt(i)) != t.charAt(i)) {
        return false;
      }
      if (!map.containsKey(s.charAt(i)) && assignedValues.contains(t.charAt(i))) {
        return false;
      }
      map.put(s.charAt(i), t.charAt(i));
      assignedValues.add(t.charAt(i));
    }
    return true;
  }

}

  // time faster than previous one (using array is faster, but why array can use
  // string as index?), space O(N->1) similar to previous one
public boolean isIsomorphic(String s, String t) {
  int[] preIndexOfS = new int[256];
  int[] preIndexOfT = new int[256];
  for (int i = 0; i < s.length(); i++) {
      char sc = s.charAt(i), tc = t.charAt(i);
      if (preIndexOfS[sc] != preIndexOfT[tc]) {
          return false;
      }
      preIndexOfS[sc] = i + 1;
      preIndexOfT[tc] = i + 1;
  }
  return true;
}