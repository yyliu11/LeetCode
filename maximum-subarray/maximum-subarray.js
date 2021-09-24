/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    if(!nums || nums.length < 2) return nums[0]
    
    let prevSum = nums[0];
    let maxSum = prevSum
    
    for(let i=1; i<nums.length ; i++) {
        prevSum = Math.max((prevSum + nums[i]), nums[i]);
        maxSum= Math.max(maxSum, prevSum);
    }
    return maxSum;
};