/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length){ return 0; }
    nums.sort((a,b) => a - b);
    const set = new Set(nums);
    const array = Array.from(set);
    let start= 0;
    let max = 0;
    let length;
    for(let i = 1; i < array.length; i++){
        if(array[i]-array[i-1]===1){
            length = i - start;
            max = Math.max(max,length);
        }else if(array[i]-array[i-1]===0){
            
        }else{   
            start = i;
        }
    }
    return max + 1;
};