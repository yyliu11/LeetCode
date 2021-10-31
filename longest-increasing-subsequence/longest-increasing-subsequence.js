/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length < 2){ return 1; }
    let map = new Array(nums.length).fill(0);
    
    for(let i = 0; i < nums.length; i++){
        for(let k = i + 1; k < nums.length; k++){
            if(!map[i]){
                map[i] = 1
            }
            if(nums[k] > nums[i]){
                map[k] = Math.max(map[k], map[i] + 1)
            }
        }
    }
    let max = map[0];
    for(let num of map){
       max = Math.max(max, num) 
    }
    return max
};