function coinChange(coins: number[], amount: number): number {
    if (coins == null || coins.length == 0) return -1;
    if (amount <= 0) return 0;
    const dp: number[] = new Array(amount+ 1).fill(Infinity);
    dp[0] = 0;
    for (let am = 1; am <= amount; am++) {
      coins.forEach((coin: number) => {
        if (coin <= am) dp[am] = Math.min(dp[am], dp[am - coin] + 1);
      })
    }
    return (dp[amount]=== Infinity) ? -1: dp[amount]; 
};