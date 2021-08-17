class Solution {
  public char nextGreatestLetter(char[] letters, char target) {
    // input: arrays, string
    // output: string
    // edge case: if length is 1 return letters[0]
    // linear search : time O(n), space O(1)
    // binary search: time O(logn), space O(1)
    int l = 0;
    int h = letters.length - 1;
    while (l <= h) {
      int mid = l + (h - l) / 2;
      if (letters[mid] > target) {
        h = mid - 1;
      } else if (letters[mid] <= target) {
        l = mid + 1;
      }
    }
    return (l < letters.length) ? letters[l] : letters[0];
  }
}