import java.util.LinkedList;

/**
 * Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes),
 * write a function to check whether these edges make up a valid tree.
 *Example 2:
Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Output: false
  A tree is a special undirected graph. It satisfies two properties
  1. It is connected
  2. It has no cycle.
 */
class solution{

  public boolean validTree(int n, int[][] edges) {
    //Build Graph by hashmap
    HashMap<Integer, ArrayList<Integer>> map = new HashMap<Integer, ArrayList<Integer>>();
    for (int i = 0; i < n ; i++){
      ArrayList<Integer> list = new ArrayList<Integer>();
      map.put(i, list);
    }
    for (int[] edge: edges) {
      map.get(edge[0]).add(edge[1]);
      map.get(edge[1]).add(edge[0]);
    }
    boolean[] visited = new boolean[n];

    Linkedlist<Integer> queue = new LinkedList<Integer>();
    queue.offer(0);
    while(!queue.isEmpty()){
      int top = queue.poll();
      //catch visited node from queue
      if(visited[top]) return false;
      visited[top] = true;
      for (int i : map.get(top)){
        //only putting new node into the queue
        if(!visited[i]) queue.offer(i);     }

    }
    for (boolean b: visited) {
    if(!b) return false;
    }
    return true;
  }
}