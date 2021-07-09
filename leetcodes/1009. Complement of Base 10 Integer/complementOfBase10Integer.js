/**
 * @param {number} n
 * @return {number}
 */
 var bitwiseComplement = function(n) {
  if (n === 0) return 1;
  let mask = 1 << 30;
  while ((n & mask) === 0) {
    mask >>= 1;
    }
    mask = (mask << 1) -1;
  return n^mask;
}
//it's the same as #476