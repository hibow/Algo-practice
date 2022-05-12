function findMin(nums: number[]): number {
/**
 * ex: 12345, 34512, 45123, 1, 12
 * while(l<h)
 * when n[m] < n[h] ->left side [l, m]
 * n[m] >n[h] -> right side [m+1, h]
 *  (so when l = m = h) ->return n[l]
 * time O(logn) space O(1)
 */
 let h: number = nums.length - 1
 let l: number = 0
 while( l < h) {
   let mid: number = l + Math.floor((h-l)/2)
   if (nums[mid]< nums[h]) {
     h = mid
   } else if (nums[mid] > nums[h]) {
     l = mid + 1
   }
 }
 return nums[l]
};