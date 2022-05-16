import collections
from typing import Deque


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
      adjMap =  [[] for _ in range(numCourses)]
      indegree = [0] * numCourses
      for c1, c2 in prerequisites:
        adjMap[c2].append(c1)
        indegree[c1] += 1

      queue = collections.deque(i for (i, d) in enumerate(indegree) if d == 0)
      count = 0

      while queue:
        cur = queue.popleft()
        count += 1
        for wannaTake in adjMap[cur]:
          indegree[wannaTake] -= 1
          if indegree[wannaTake] == 0: queue.append(wannaTake) #don't queue wannaTake dupliacte

      return count == numCourses

      '''
        was using dict() but kinda complex to loop thru
        and then use adjMap array based on index to store array of courses
        need to consider edges vertice relationsip
        indegree is to store the incoming edge for each vertex if there is 0 -> possible no cycle loop
           then we are able to get the wannaTake courses to count the total courses
        if incoming edge is not zero -> there must be a cycle loop =>false
        time O(v+ E(last loop?)) space O(v)
      '''