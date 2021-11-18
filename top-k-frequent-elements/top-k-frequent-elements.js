/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]]++
        }else{
            obj[nums[i]] = 1
        }
    }
    let arr = Object.keys(obj).sort((a,b) => obj[b] - obj[a]);
    return arr.slice(0, k)
};