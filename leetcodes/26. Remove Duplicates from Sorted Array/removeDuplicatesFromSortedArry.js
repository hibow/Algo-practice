/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    //input: arrays
    //output: number(uniq numbers) (array will be changed)
    //edge case: array length >= 0
    //it doesn't remove duplicate -> just replace the original array
    //O(1) space is required -> no hashmap
    //time: O(n)
    if (nums.length === 0) return 0;
    //create cur= 0,next=1 iterate over the array
    let cur = 0;
    for (let next = 1; next < nums.length; next ++) {
      //if cur not equal to next
      if (nums[cur] != nums[next]){
        //cur++
        cur++;
        //nums[cur] = nums[next]
        //next ++
        nums[cur] = nums[next];
      }
    }
    return cur + 1;
    //return cur(index) + 1 -> uniq numbers
};