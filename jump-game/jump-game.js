/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
   for(let i = nums.length - 2; i >=0; i--){
       if(nums[i] === 0){
           let k = i - 1;
           while(k >= 0){
               if(nums[k] > i - k){ break; }
               k--
           }
           if(k < 0){ return false; }else{
               i = k
           }
       }
   }
    return true;
};