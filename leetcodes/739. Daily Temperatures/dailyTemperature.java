class Solution {
  public int[] dailyTemperatures(int[] temperatures) {
    // input: array int[]
    // output: array int[]
    // edge case: if len is 1, return 0, if no future day for which this is
    // possible, ans[i] = 0
    /***
     * time: O(n), space: O(2n) worse case
     * 
     * use ans array to store ans, fills with 0 use stack to store index value
     * (because we want to get the difference of their index) iterate over the
     * temperatues array, a while loop when stack is not empty, check if the t[last
     * element of stack] < t[current index] get diff = current index - last element
     * of stack ans[last element of stack] = diff push index into stack
     * 
     * return ans
     */
    int n = temperatures.length;
    int[] answer = new int[n];
    Stack<Integer> indexs = new Stack<>();
    for (int i = 0; i < n; i++) {
      while (!indexs.isEmpty() && temperatures[i] > temperatures[indexs.peek()]) {
        int preIdx = indexs.pop();
        answer[preIdx] = i - preIdx;
      }
      indexs.add(i);
    }
    return answer;
  }
}