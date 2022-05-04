/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
  //sliding window..
  //use char Map to calculate the freq
  //time O(n), space O(n) if use freq[26] -> space O(1)
  let freq = {};
  let maxFreqChar = 0;
  let maxLen = 0;
  let left = 0;
  for (let right = 0; right < s.length ; right++) {
    //if duplicate -> freq[char] ++
    if (!freq[s[right]]) {
        freq[s[right]] = 1;
    } else {
        freq[s[right]] ++;
    }
    //get maxFreqChar -> use it to calculate lettersToChange
    maxFreqChar = Math.max(maxFreqChar, freq[s[right]])
    //get lettersToChange
    let lettersToChange = (right - left + 1) - maxFreqChar
    //if lettersToChange > k (needs to be changes) -> left++ , freq[char]--
    if (lettersToChange > k) {
      freq[s[left]]--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1) 
  } 
  return maxLen;
};