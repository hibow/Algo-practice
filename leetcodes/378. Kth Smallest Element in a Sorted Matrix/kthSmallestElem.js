/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
  //edge case: matrix is null return null
  /**
   * 1)brute force -> make them an array and sort it
   * timeO(n^2*logN):logn is sorting time, space O(N^2)
   * 2) merge sort -> minHeap
   * take the first row elems into a bucket
   *
   * iterate k times -> take first one is queue out
   * and add the next row element into queue -> and sort
   *
   * ->return the final val
   * timeO(klogn): logN is sorting time, spaceO(n)-> same queue size
   *
   * 3)binary search:
   *   repeat the steps when low <= high, start from 0,0 and m-1, n-1
   *    count = 0; get mid from low and high;
   *    counts from 0,0 to matrix(i, j) <=mid
   *    if count < k, low is mid + 1;
   *    else hi is mid - 1; (adjust the high and low and get new mid)
   *    exit when low > high
   *    return low....
   *  time O(nlog(r−l)) -> each for with O(n) time
   *  space O(1)
   */
  let m = matrix.length;
  let n = matrix[0].length;
  let lo = matrix[0][0];
  let hi = matrix[m-1][n-1];
  while(lo <= hi) {
    let mid = Math.floor(lo + (hi - lo)/2);
    let cnt = 0;
    //O(n)
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n && matrix[i][j] <= mid; j++) {
        cnt ++;
      }
    }
    if (cnt < k) lo = mid + 1;
    else hi = mid - 1;
  }
  return lo;
};