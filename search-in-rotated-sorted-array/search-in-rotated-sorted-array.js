/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums.length || target === null){ return -1; }
    var start = 0;
    var end = nums.length - 1;

    while(start <= end){
    var middle = Math.ceil((start + end) / 2);
    if(nums[middle] === target){ return middle; }
    else if(nums[middle] > target){
        if(nums[start] > target && nums[start] <= nums[middle]){
            start = middle + 1;
        }else{
            end = middle - 1;
        }
    }else{
        if(nums[end] < target && nums[middle] <= nums[end]){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
    }
    } return -1;
};