/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        nums[mid] < target ? left = mid + 1 : right = mid;
    }
    
    if (nums[left] !== target) return [-1, -1];
    
    const start = left;
    right = nums.length - 1;
    
    while (left < right) {
        const mid = left + Math.ceil((right - left) / 2);
        nums[mid] <= target ? left = mid : right = mid - 1;
    }
    
    return [start, left];
};
[5,7,7,8,8,10]
8