import java.util.PriorityQueue;

class Solution {
<<<<<<< HEAD
    public int findKthLargest(int[] nums, int k) {
      /**
       input: array and integer
       output: integer
       edge case:
       constraint:
       *quick sort: time O(n) space O(1)
        sort: time O(NlogN) space O(1)
        stack sort: time O(NlogK) space O(K)
       **/
      PriorityQueue<Integer> pq = new PriorityQueue<>(); // 小顶堆
      //Add(): The elements are stored based on the priority order which is ascending by default.
      for (int val : nums) {
          pq.add(val);
          if (pq.size() > k)
              pq.poll();
             //add() & poll():  time O(logK)
      }
      return pq.peek();
    }
  }