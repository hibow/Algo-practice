function twoSum(nums: number[], target: number): number[] {
  //time O(n^2) - brute force
  //time O(n), space O(n) 
  let hashMap: Map<number, number> = new Map()
  // for (let i: number = 0; i < nums.length; i++) {
  //   if (!hashMap.get(nums[i])) {
  //     hashMap.set(nums[i],i)
  //   }
  // }
  // for (let i : number = 0; i < nums.length; i++) {
  //   if (hashMap.get(target - nums[i]) && (i!= hashMap.get(target - nums[i]))) return [i, hashMap.get(target - nums[i])] 
  // }
  for (let i : number = 0; i < nums.length; i++) {
    if (hashMap.get(target - nums[i]) != undefined && (i!= hashMap.get(target - nums[i]))) return [i, hashMap.get(target - nums[i])]
    hashMap.set(nums[i],i)
  }
}; 