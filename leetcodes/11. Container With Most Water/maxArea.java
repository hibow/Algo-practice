class Solution {
  public int maxArea(int[] height) {
    // constraint: len >=2
    // input: array, output: integer
    // two pointers while loop, time O(n), space O(1)
    int n = height.length;
    int s = 0;
    int e = n - 1;
    int max_area = 0;
    while (s < e) {
      int w = e - s;
      int h = (height[s] > height[e]) ? height[e] : height[s];
      max_area = Math.max(max_area, w * h);
      if (height[s] <= height[e])
        s++;
      else
        e--;
    }
    return max_area;
  }
}