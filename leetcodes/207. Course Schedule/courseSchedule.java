import java.util.Queue;

class Solution {
  public boolean canFinish(int numCourses, int[][] prerequisites) {
    //BFS : time O(V+E) space: O(V)
    /**
     * Queue = new LinkedList<>() -> start from the must take vertice for multiple courses
     * List<Int>[] MustTake = new LinkedList[numCourses] (vertice, adj vertice:what is want take)
     * int[] Indegree = new int[numCourses]; (vertice, edge: how many must take)
     * queue.offer(i)-> when indegree[i] = 0 =>no incoming edge
     * while queue(mustTake)
     *  course = poll queue, count++
     *  for each MustTake[course] element -> if -- Indegree[elem] = 0 ->  queue.offer(elem)
     *  ex: n =3, [[0,1],[0,2]] ->musttake[1] = [0]; musttake[2] = [0] , indegree[0] = 2
     *  ex: n = 3 [[0,1],[2,1]] ->musttake[1] = [0,2]
     */
    List<Integer>[] graph = new LinkedList[numCourses];
    Queue<Integer> queue = new LinkedList<>();
    int[] indegree = new int[numCourses];
    int count = 0;
    for (int i = 0; i < numCourses; i++) graph[i] = new LinkedList<>();
    for (int[] pair : prerequisites) {
      graph[pair[1]].add(pair[0]);
      indegree[pair[0]]++;
    }
    for (int i = 0; i < indegree.length; i++)
      if (indegree[i] == 0) queue.offer(i);
    while (!queue.isEmpty()){
      int course = queue.poll();
      count ++;
      for (int wannaTake : graph[course])
        if (--indegree[wannaTake] == 0) queue.offer(wannaTake);
    }
      return count == numCourses;
  }
}