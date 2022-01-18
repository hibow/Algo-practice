class Solution {
  public boolean containsDuplicate1(int[] newNums) {
    //sort array time O(nlogn), space O(n) ->O(1) if sort the original array
    //iterate over the array, if next one is the same as previous return true
    // int [] newNums = Arrays.copyOf(nums, nums.length);
    Arrays.sort(newNums);
    // int prev = newNums[0]; use one IF
    for (int i = 1; i<newNums.length; i++) {
        if (newNums[i] == newNums[i-1]) return true;
        // else {
            // prev = newNums[i];
        // }
    }
    return false;
  }

public boolean containsDuplicate2(int[] nums) {
  //time O(n), space O(n);
  //final means we don't want distinct point to another Set instance. But the content of distinct can be modified.
  final Set<Integer> distinct = new HashSet<Integer>();
  for(int num : nums) {
      if(distinct.contains(num)) {
          return true;
      }
      distinct.add(num);
  }
  return false;
  }
}