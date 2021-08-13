/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
  //input: 2d arrays
  //output: 2d arrays
  /**
   *  time O(n^2) , space O(n)
   * 1. sort the array based on height if same height based on kth
   *    1st element -> des, 2nd element->asec
   * 2. pick up the tallest one first
   * 3. when insert the next tallest guy, just insert him into kth position
   * 4. repeat until all people are inserted into list
   *
   */
  //time : O(nlogn)
  people.sort((a, b) => (a[0] === b[0])? a[1] - b[1] : b[0] - a[0]);
  let res = [];
  for ( let i = 0; i < people.length; i++) {
    //for loop time O(n)
    res.splice(people[i][1], 0, people[i])
    //0-> delete count
    //splice time O(n)
  }
  return res;
};