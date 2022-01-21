import java.util.Map;
import java.util.Queue;

/**
 * There is a new alien language which uses the latin alphabet.
 * However, the order among letters are unknown to you.
 * You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language.
 * Derive the order of letters in this language.
 * Example 1:
Given the following words in dictionary,
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
The correct order is: "wertf".
Note:
You may assume all letters are in lowercase.
You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
 */

class Solution {
   public String alienOrder(String[] words) {
    //bfs
    /**
     * Time Complexity: O(|V| + |E|)
    The time it takes to build a graph would be O(|E|) since we need to traverse through all the edges and initializing a queue that has vertices w in-degree 0 would take O(|V|) assuming we have V vertices. Lastly, dequeue and output the vertices would take O(|V|) as well since dequeueing and outputting each vertex are linear time.
      Space Complexity: O(|V|)
    The memory needed for this problem would be the in-degree array and a dictionary containing all the vertices as keys and vertices they're sourcing to as values.
    Both would take O(|V|)

    */
    //similar to schedule course
    /**
     * 1.Build a graph with each character as a vertex and dependency as an edge connecting characters.
     * Then sort vertices topologically.
     * 2. indegree array -> store how many incoming edge each node has and always pick the lowest number first
     * if each node has at least one incoming edge, it has circle -> order is invalid.
     * 3. pick indegree is 0 to queue (while queue is not empty)
     *    aliendict += vertex
     *    pick next indegree is 0 ...
     *
     */
    if (words == null || words.length == 0) return "";
    Map<Character, Set<Character>> map = new HashMap<Character, Set<Character>>();
    Map<Character, Integer> degree = new HashMap<Character, Integer>();
    StringBuilder sb = new StringBuilder();
    //put each vertex w indegree = 0
    for (String s: words){
      for(char c: s.toCharArray()){
        degree.put(c, 0);
      }
    }
    //commpare each word and its pre-word char by char
    //if different, since C1 is in front of C2, put C2 into C1's next set, c2 indegree +1
    for (int i = 0; i < words.length - 1; i++){
      String cur = words[i];
      Sring next = words[i + 1];
      //using longer one
      int length = Math.min(cur.length(), next.length());
      for (int j = 0; j < length; j++) {
        char c1 = cur.charAt(j);
        char c2 = next.charAt(j);
        if(c1!=c2) {
          Set<Character> set = map.getOrDefault(c1, new HashSet());
          if (!set.contains(c2)) {
            set.add(c2);
            map.put(c1, set);
            degree.put(c2, degree.get(c2) + 1);
          }
          break;
        }
      }
    }
    //topological sort via BFS
    Queue<Character> q = new LinkedList();
    //put all 0 in-degree into queue
    for (char c: degree.keySet()){
      if (degree.get(c) == 0) q.add(c);
    }
    while(!q.isEmpty()) {
      char c = q.poll();
      sb.append(c);
      if(map.containsKey(c)){
        for(char c2:map.get(c)) {
          //all next chars' in-degree abstract 1
          degree.put(c2, degree.get(c2) - 1);
          if(degree.get(c2) == 0) q.add(c2);
        }
      }
    }
    if(sb.length() != degree.size()) return "";
    return sb.toString();
   }
  }