/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    //input: numbers array, integer
    //output: numbers array
    //edge case:
    /**
     * bucket sort:
     * use map to get counts for each num,
     * use buckets{} to store count with [num..]
     * use topK[] to store num from higher frequency to lower
     *
     * return topK[0 to k]
     *
     */
    let map = {};
    let max = 0;
    for (let i = 0;i < nums.length; i++) {
      map[nums[i]] = (!map[nums[i]])? 1 : map[nums[i]] + 1;
    }
        //console.log(map)
    let buckets ={};
    for (let key in map) {
        let freq = map[key];
        max = Math.max(max, freq);
       //   console.log(freq)
        if (!buckets[freq]) buckets[freq] = [];
        buckets[freq].push(parseInt(key));
      }
      // console.log(Object.keys(buckets).length)
      //  let bLen = Object.keys(buckets).length;
      let topK = [];
      //can't use max to do iteration ..time consuming
      //test case: [1,1,1,1,1,1,1,1,1,.....]
      for (let j = max; j > 0 && topK.length <= k ; j--) {
          console.log(j, buckets[j])
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
      return topK;
    };