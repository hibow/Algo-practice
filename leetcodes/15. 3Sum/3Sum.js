/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  //two pointers: sort nums
   //i, l, r -> itearte over the nums array (i from 0 to len - 3 to have at least 3 elem) 
  // while(l < r) l = i + 1, r = len - 1, i + l + r = s
  // if s < 0 -> l++
  // else if s > 0  -> r--
  // if s == 0-> push to result array ,  l++, r--
  //return res array
  //time O(n^3), space O(n)
const res = [] 
if (nums.length < 3) return res;
nums.sort((a, b) => a - b)

for (let i =0; i < nums.length - 2; i++) {
  let l = i +1;
  let r = nums.length - 1;
  if (nums[i]>0) break;
  if (i >0 && nums[i] === nums[i-1]) continue;  
  while(l < r) {
    let s = nums[i] + nums[l] + nums[r]
    if (s > 0) r--;
    else if (s < 0) l++;
    //has to reorder to avoid OLE (if I can use set, should be better)
    else {
      res.push([nums[i], nums[l], nums[r]])
       while((l<r) && (nums[l] === nums[l + 1])) l++;
       while((l<r) && (nums[r] === nums[r - 1])) r--; 
       l++;
       r--;
    }
  }
}
return res;
};