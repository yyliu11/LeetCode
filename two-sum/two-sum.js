/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp = {};
    for(let i = 0; i < nums.length; i++){
        if(temp[target - nums[i]] !== undefined){
            return [temp[target - nums[i]], i]
        }else{
            temp[nums[i]] = i
        }
    }
};
[2,7,11,15]
9