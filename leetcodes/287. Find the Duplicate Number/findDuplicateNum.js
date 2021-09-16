/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
  /**
   * range = [1,n] unsorted nums
   *
   * 1) set timeO(n) spaceO(n)
   * 2) binary bits timeO(n) spaceO(1)
   * 3) array timeO(n) spaceO(1)
   * 4) binery search timeO(nlogn) spaceO(1)
   *   low is 1, high is length - 1
   *    while( l<= h), get mid, cnt = 0, counts if nums[i]<= mid from 0 to length
   *    if (count > mid) h is mid - 1 (bc the mid was > duplicate num so narrow down the range)
   *    else l is mid + 1
   *   exit when l > h, return l
   *
   * 5) two pointers timeO(n) spaceO(1)
   *    cycle linked list idea -> duplicate num means they link together
   *    slow pointer
   *    faster pointer
   *   1st phase -> find faster pointer entry location
   *   2nd phase -> slow starts from 0, fast starts from entry point
   *   go until they meet and return the point they meet
   */
  let slow = nums[0];
  let fast= nums[nums[0]];
  while(slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;
  while(slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};