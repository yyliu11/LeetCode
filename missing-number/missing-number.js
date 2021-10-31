/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let size = nums.length;
    while(size >= 0){
        sum += size;
        size--
    }
 
    for(let num of nums){
        sum -= num;  
    }
    return sum
};