function climbStairs(n: number): number {
  if (n <=2 ) return n;
  let pre1: number = 2;
  let pre2: number = 1;
  for (let i = 3; i <=n; i++) {
    let cur: number
    cur = pre1 + pre2;
    pre2 = pre1;
    pre1 = cur;
  }
  return pre1;
};