/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftToRight = new Array(nums.length);
    leftToRight[0] = nums[0];
    let rightToLeft = new Array(nums.length);
    rightToLeft[nums.length - 1] = nums[nums.length - 1];
    let res = new Array(nums.length);
    
    for(let i = 1; i <  leftToRight.length; i++){
         leftToRight[i] = nums[i] *  leftToRight[i-1]
    }
    
    for(let k = rightToLeft.length - 2; k >= 0; k--){
         rightToLeft[k] = nums[k] *  rightToLeft[k+1]
    }
    
    res[0] =  rightToLeft[1];
    res[res.length - 1] = leftToRight[leftToRight.length - 2];
    for(let j = 1; j < res.length - 1; j++){
        res[j] =  rightToLeft[j+1] * leftToRight[j-1]
    }
    return res;
};