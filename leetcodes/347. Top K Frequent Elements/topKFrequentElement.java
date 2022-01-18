import java.util.Map;

import javax.xml.namespace.QName;

class Solution {
  public int[] topKFrequent(int[] nums, int k) {
    // input: array, integer
    // output: array
    // edge case:
    // constraints:

    /**
     * 1) heap map-> bucket sort: time O(Nlogk) if N=k-> O(NlogN), space O(N + k) a.
     * create heap map -> get the frequency as value b. create bucket -> add array
     * into bucket[frequency] c. create res array and concate bucket elements from
     * more frequent for k pcs 2) quick sort->O(n), worse case: O(n^2), space O(N)
     */
    Map<Integer, Integer> freq = new HashMap<Integer, Integer>();
    for (int n : nums) {
      freq.put(n, freq.getOrDefault(n, 0) + 1);
    }
    // bucket sort on freq
    Queue<Integer> heap = new PriorityQueue<>((n1, n2) -> freq.get(n1) - freq.get(n2));

    for (int key : freq.keySet()) {
      heap.add(key);
      if (heap.size() > k)
        heap.poll();
    }
    // gather result
    int[] top = new int[k];
    for (int i = k - 1; i >= 0; --i) {
      top[i] = heap.poll();
    }
    return top;
  }
}