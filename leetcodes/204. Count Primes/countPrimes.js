/**
 * @param {number} n
 * @return {number}
 * 
 * prime -> true
 * not Prime -> false
 * it is easy to get not prime by having prime first -> make all number is prime as default
 * count when prime is true 
 * prime x i to x until prime * i = n
 * 
 * Sieve of Eratosthenes is a standard algorithm.
 * space: O(n), time O(nlog(logn))
 */


 var countPrimes = function(n) {
   //input : integer
   //output: integer
   //edge case: when n = 0, 1  -> return 0; no negative numbers.
  if (n === 0 || n ===1 || n ===2) return 0;
  let isPrimeArr = new Array(n).fill(true);
  let count = 0;
   //create a an array(or map) with n elements and fill with true -> isPrime
  for (let i = 2; i < n; i++) { // O(n)
    //iterate over the n, if it's prime -> get non prime and set them false in isPrime array->count ++
    //from 2 to n (less than n)
    if (isPrimeArr[i] === true) { //O(log(logn))
       //since 2 can't be counted -> count from 3 -> isPrimeArr[2]
      for (let j = 2; j * i < n; j ++) {
        //count from 2 x i(2,3,5...) < n
        isPrimeArr[j * i] = false;
      }
      count ++;
    }
  }
   //return count
  return count;
};

