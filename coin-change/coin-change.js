/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(!amount) return 0;
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for(let i = 1; i < dp.length; i++) {
        for(let k = 0; k < coins.length; k++) {
           let diff = i - coins[k];
            if(diff >= 0) {
                dp[i] = Math.min(dp[i], dp[diff] + 1)
            }
        }
    }
    if(dp[dp.length - 1] === Infinity)return -1;
    return dp[dp.length - 1]
};