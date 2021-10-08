/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_profit = 0
    let current_min = prices[0]
    
    for(let i = 1; i < prices.length; i++){
        let price = prices[i]
        
        max_profit = Math.max(max_profit, price - current_min)
        current_min = Math.min(current_min, price)
    }
    
    return max_profit
};