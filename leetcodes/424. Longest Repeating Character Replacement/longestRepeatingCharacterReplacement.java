class Solution {
  public int characterReplacement(String s, int k) {
    //sliding window [left, right], iterate over s
    //freq array = new int[26], count letter in the array
    //count most freq letter
    //get lettersToChange -> right - left + 1 - most freq letter count
      //if lettersToChange > k -> left ++, minus 1 for the letter in freq array
    //return max -> keep comparing
    //time O(n), spaceO(26) = O(1)
    //
    int[] freq = new int [26];
    int mostFreqLetter = 0;
    int left = 0;
    int max = 0;
    for (int right = 0; right < s.length(); right++) {
      freq[s.charAt(right) - 'A'] ++;
      mostFreqLetter = Math.max(mostFreqLetter, freq[s.charAt(right) - 'A']);
      int lettersToChange = (right - left + 1) - mostFreqLetter;
      if(lettersToChange > k) {
        freq[s.charAt(left) - 'A'] --;
        left ++;
      }
      max = Math.max(max, right - left + 1);
    }
    return max;
  }
}