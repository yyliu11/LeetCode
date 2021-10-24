/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -Infinity;
    
    for(let i = 0; i < nums.length; i++){
        let temp = 1;
        for(let j = i; j < nums.length; j++){
            if(j===i){ 
                max = Math.max(max, nums[i]); 
            }else{
                temp *=nums[j];
                max = Math.max(max, nums[i]*temp) 
            }
        }
    }
    return max;
};