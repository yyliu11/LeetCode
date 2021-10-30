/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    for(let num of nums){
        if(!obj[num]){
            obj[num] = true;
        }else{
            return true;
        }
    }
    return false;
};