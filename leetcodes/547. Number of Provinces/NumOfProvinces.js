/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
 //input: 2d array
 //output: integer
 /**
  * 1) dfs: time O(n^2)(it's a sqaure), space O(N)-> recursive stacks
  *     main -> iterate over matrx
  *             if (m[i][i] == 1), count++, dfs(m, len, i, j);
  *     return count
  *     dfs:  ->
  *             if m[i][j] != 1 return;
  *             M[i][j] = 0
  *             iterate over j's frinds and add them to circle
  *                  if M[j][k] === 1, dfs(m, len, j, k)
  */

 if (!isConnected) return 0;
 const len = isConnected.length;
 let count = 0;
 for (let i = 0; i < len ;i++) {
   for (let j = 0; j < len; j++) {
     if (isConnected[i][j] === 1) {
       count ++;
       dfs(isConnected, len, i, j);
     }
   }
 }
 return count;
};
const dfs = (m, n, i, j) => {
  if (m[i][j] != 1) return;
  m[i][j] = 0;
  for (let k = 0; k <n; k++) {
    if (m[j][k] === 1) {
      dfs(m ,n, j, k);
    }
  }
}