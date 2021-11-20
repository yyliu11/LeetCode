/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    const findTarget = (start, end, target) => {
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === target)return mid;
        if(start === end)return -1;
        if(nums[mid] < target) {
            if(mid === end)return -1;
            return findTarget(mid + 1, end, target)
        }else{
            if(mid === start)return -1;
            return findTarget(start, mid - 1, target)
        }
    };
    return findTarget(start, end, target);
};