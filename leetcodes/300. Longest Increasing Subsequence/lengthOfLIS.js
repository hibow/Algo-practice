/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  //time O(n^2), space O(n)
  let DP = new Array(nums.length).fill(1)
  let result = 1
  for (let i = 1; i < nums.length; i ++) {
    for (let j = 0; j < i; j ++) {
      if (DP[i] > DP[j]) {
        DP[i] = Math.max(DP[j] + 1, DP[i])
      }
    }

  }
  return Math.max.apply(Math, DP) //get the max from the array
};
var lengthOfLIS = function(nums) {
  //time O(nlogn), space O(n) -> binary search for replacing sub element
  const BSP = (sub, val) => {
    let low = 0
    let high = sub.length - 1
    while (low <= high) {
      let mid = low + Math.floor((high - low)/2)
      if (sub[mid] < val) {
        low = mid + 1
      } else if (sub[mid] > val) {
        high = mid - 1
      } else return mid
     }
      return low
    }
  let sub = [];
  for (let val of nums) {
    let pos = BSP(sub, val)
    if (pos === sub.length) sub.push(val)
    else sub[pos] = val
  }
  //[2,3,7,18] --> sub
  return sub.length
  }