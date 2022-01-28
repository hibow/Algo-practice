import java.util.Collection;
import java.util.LinkedList;

class Solution {
  public List<List<String>> groupAnagrams(String[] strs) {
    //iterate over strs
     //iterate over each string
        //put each letter into new char[26] array
     //set char[26] array as new string
      //char type 0~127 is enough for constraint 0 <= strs[i].length <= 100
       //6 ms use char(0~127) array and new String(frequencyArr) method.
     //create tempList as map.getOrDefault(key, new LinkedList<String>())
     //push s into tempList
     //put templist as value of key in map
    //retrun new List->map.values() -> value Set of map
    //time O(mxn) spaceO(k) -> worse case O(n)
    if (strs == null || strs.length == 0) new ArrayList<>();
    Map<String, List<String>> map = new HashMap<>();
    for (String s: strs) {
      char[] frequencyArr = new char[26];
      for (int i = 0; i < s.length(); i++) {
        frequencyArr[s.charAt(i) - 'a'] ++;
      }
      String key = new String(frequencyArr);
      List<String> tempList = map.getOrDefault(key, new LinkedList<String>());
      tempList.add(s);
      map.put(key, tempList);
    }
    return new LinkedList<>(map.values());
  }
}