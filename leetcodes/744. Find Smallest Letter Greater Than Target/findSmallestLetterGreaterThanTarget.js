/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 *
 */
 var nextGreatestLetter = function(letters, target) {
//input: charcters array
//output: character
//edge case: at least two lowercase letter
//if larger than the last one of the list, it will wrap around, return the first character of the list
/**
 * 1) iterate over the array from the start, if letters[i] > target return letter i else return letters[0]
 * time: O(n), space O(1)
 * 2) binary search: time O(logN)
 * use mid, run iteration while h >= l
 * if mid > target -> higher boundary decrease
 *  h = mid -1;
 * if mid <= target -> lower boundary increase
 * l = mid + 1;
 * exit return letters[l]
 *
 */
 let llen = letters.length;
  if (target >= letters[llen -1] ) return letters[0];
  let h = llen -1;
  let l = 0;
  while( l <= h) {
    let mid = l + Math.floor((h-l)/2);
    if (letters[mid]>target) {
      h = mid - 1;
    } else if (letters[mid] <= target) {
      l = mid +1;
    }
  }
  return l < llen? letters[l]: letters[0];
  //return letters[l % llen] -> for line25
};