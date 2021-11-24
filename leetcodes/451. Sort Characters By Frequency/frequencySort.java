import java.util.List;
import java.util.Map;

class Solution {
  public String frequencySort(String s) {
    // input: string
    // output: string
    /**
     * 1) bucket sort ->time O(nlogm), m is the distinguish character, can be O(1)
     * since only 26 letters -> O(n), space O(n)
     * 
     * a. create heap map -> count freq of char
     * 
     * b. create bucket -> put character into the element based on freq index
     * (sorting)
     * 
     * c. create string builder -> append most freq char to the string builder
     */
    if (s == null)
      return null;
    Map<Character, Integer> map = new HashMap<>();
    for (char c : s.toCharArray())
      map.put(c, map.getOrDefault(c, 0) + 1);

    List<Character>[] bucket = new List[s.length() + 1];
    for (char key : map.keySet()) {
      int frequency = map.get(key);
      if (bucket[frequency] == null)
        bucket[frequency] = new ArrayList<>();
      bucket[frequency].add(key);
    }
    StringBuilder sb = new StringBuilder();
    for (int pos = bucket.length - 1; pos >= 0; pos--)
      if (bucket[pos] != null)
        for (char c : bucket[pos])
          for (int i = 0; i < pos; i++)
            sb.append(c);
    return sb.toString();
  }
}