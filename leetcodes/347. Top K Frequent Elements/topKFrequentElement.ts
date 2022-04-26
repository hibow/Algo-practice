function topKFrequent(nums: number[], k: number): number[] {
    //hashmap sort time: O(nlogN), space O(n+k)
      //create a hashmap{{freq, elem array}}
      //create a sorted map{{freq, elem array}}
      //create a topK array 
    //bucket map time O(n) space O(n+k)
      //create a hashmap{{freq, [elem array]}}
      //get the max freq
      //create a topK array
        //iterate over from max and index
        //concat elem array into topK array -> [top1, elem1, elem2...]
        //until topK array length is k
      //return topK array
  const freqMap = new Map<number, number>();
  let topK: number[] = [];
  //freqMap{elem:freqCount}
  for (let num of nums) freqMap.set(num, (freqMap.get(num) || 0 ) + 1);
    //bucket [freq, [elem arr]]
  const buckets: number[][] = Array(nums.length + 1)
		.fill(undefined)
		.map(() => []) // count => [nums]
	for (const [num, count] of freqMap.entries()) buckets[count].push(num)
  //topK[]
  for (let j = buckets.length - 1; j > 0 && topK.length <= k ; j--) {
  if (!buckets[j] || buckets[j] === undefined) continue;
   //console.log(buckets[j].length,'topK',k-topK.length)
  if (buckets[j].length <= (k - topK.length)) {
    //  console.log(buckets[j])
    topK = topK.concat(buckets[j]);
    //  console.log(topK)
  } else {
    topK.concat(buckets[j].slice(0, k-topK.length + 1))
  }
}
  return topK
};