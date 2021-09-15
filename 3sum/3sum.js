/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var output = [];
    if(nums.length < 3){ return []; }

    nums.sort((a,b)=>{return a-b;});

    for(var i = 0; i < nums.length; i++){
        if(nums[i] > 0){ break; }
        if(i>0 && nums[i] === nums[i-1]){ continue; }
        var start = i+1;
        var end = nums.length - 1;
        while(start < end){
            var sum = nums[i] + nums[start] + nums[end];
            if(sum === 0){
                output.push([nums[i], nums[start], nums[end]]);
                start = checkRightDuplicates(start, nums);
                end = checkLeftDuplicates(end, nums);
                start ++;
                end --;       
            }else if(sum > 0){ end--; }else{ start++; }
        }
    } return output;
};

const checkRightDuplicates = (index, number) =>{
    if(number[index] === number[index + 1]){
       return checkRightDuplicates(index + 1, number);
    }else{
        return index;
    }
};
const checkLeftDuplicates = (index, number) =>{
    if(number[index] === number[index - 1]){
       return checkLeftDuplicates(index - 1, number);
    }else{
        return index;
    }
};