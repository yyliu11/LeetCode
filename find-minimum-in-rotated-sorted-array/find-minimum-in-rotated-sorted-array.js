/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = Infinity;
    
    const findMin = (startIdx, endIdx)=>{
        let midIdx = Math.floor((endIdx + startIdx) / 2);
        let start = nums[startIdx];
        let end = nums[endIdx];
        let mid = nums[midIdx];
        if(startIdx === midIdx || endIdx === midIdx){
            return Math.min(start, min, end);
        }
        if(mid >= start){
            min = Math.min(start, min);
            return findMin(midIdx + 1, endIdx)
        }else{
            min = Math.min(mid, min);
           return findMin(startIdx, midIdx - 1)
        }
    }
    return findMin(0, nums.length-1)
};

[3,4,5,1,2]