/**
 * P181 from programer coding interview
 * Question: Assume each cow will get birth to one small cow and they never die. First year there is one small cow, since second year the cow starts to get birth to a small cow. 
 * Each small cow has to wait 3years to give birth another new cow. 
 * Given N years, what is the quantity of the cows?
 * 
 * create DP[i] as the amount of cows in the ith year
 * 
 * start from DP[1] = 1, DP[2] = 2, DP[3] = 3 DP[4] = DP[1] + DP[3]
 * 
 * DP[i] = DP[i-1](previous amount) + DP[i-3] (new cow gives birth)
 * 
 * 
 * 
 */