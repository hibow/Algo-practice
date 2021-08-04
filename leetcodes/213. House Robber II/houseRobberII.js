/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    //original: DP(i) = Math.max(DP(i-2) +nums[i] + DP(i-1)) 
    /***
     * circle: time O(2n), space O(1)
     * if length is odd -> if nums[0]< nums[i] don't count nums[0]
     * test case: [1,2,1,1] -> 3; [2,3,2] -> 3; [2,1,1,2] -> 3
     * divide into two sub problem -> rob0(0, len -2) and rob1(1, len -1)
     * return the max of rob0 and rob1
     * 
     * 
     */

    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    return Math.max(robHouse(nums, 0, nums.length - 1), robHouse(nums,1, nums.length))
};

const robHouse = (nums, start, end) => {
  let pre1 = 0;
  let pre2 = 0;
  for (let i = start; i<end; i++) {
    let cur = Math.max(pre2 + nums[i], pre1);
    pre2 = pre1;
    pre1 = cur;
  }
  return pre1;
}