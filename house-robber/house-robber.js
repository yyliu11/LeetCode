/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1){ return nums[0]; }
    let max = 0;
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = nums[1];
    for(let i = 2; i < nums.length;i++){
        max = Math.max(dp[i-2],max);
        dp[i] = max + nums[i]
    }
    return Math.max(dp[nums.length - 1], dp[nums.length - 2])
};