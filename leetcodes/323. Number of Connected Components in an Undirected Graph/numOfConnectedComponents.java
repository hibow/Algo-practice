/**
 * Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
 *  write a function to find the number of connected components in an undirected graph.

Example 1:
     0          3
     |          |
     1 --- 2    4
Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.

Example 2:
     0           4
     |           |
     1 --- 2 --- 3
Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.

Note:
You can assume that no duplicate edges will appear in edges.
Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

*/
public class Solution {
  public int countComponents(int n, int[][] edges) {
   //dfs: Time Complexity: O(V + E), Space Complexity: O(V + E)
   //build graph -> HashMap <Integer, List<Integer>>()
   //       add edges in the list
   //iterate over n times -> break when all node visited
  // if node not visited -> count ++ (connection)
  // call dfs() -> to get the node for the same connection
  //dfs ->(map, node index, visited )
    HashMap<Integer, List<Integer>> map = new HashMap<Integer, List<Integer>>();
    init(map, edges, n); //build graph
    boolean [] visited = new boolean[n];
    int count = 0;
    for (int i = 0; i<n; i++) {
      if (visited[i] == false) {
        count++;
        dfs(map, i, visited);
      }
    }
    return count;

  }
  private void dfs(HashMap<Integer, List<Integer>> map, int idx, boolean[] visited) {
    visited[idx] = true;
    for (Integer j: map[idx]){
      if(visited[j] == false){
        dfs(map, j, visited);
      }
    }
  }
  private void init(HashMap<Integer, List<Integer>> map, int [][] edges, int n) {
    for (int i = 0; i < n; i++) {
      map.put(i, new LinkedList<Integer>());
    }
    for (int i = 0; i< edges.length; i++) {
      map.get(edges[i][0]).put(edges[i][1]);
      map.get(edges[i][1]).put(edges[i][0]);
    }
  }
}