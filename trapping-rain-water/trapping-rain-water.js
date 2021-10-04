/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let size = height.length;
    if(size < 3){ return 0; }
    
    let leftMaxArr = new Array(size).fill(0);
    leftMaxArr[0] = height[0];
    for(let i = 1; i < size; i++){
        leftMaxArr[i] = Math.max(leftMaxArr[i-1],height[i])
    }
    
    let rightMaxArr = new Array(size).fill(0);
    rightMaxArr[size - 1] = height[size - 1];
    for(let j = size - 2; j >= 0; j--){
        rightMaxArr[j] = Math.max(rightMaxArr[j+1],height[j])
    }
    
    let result = 0;
    for(let k = 0; k < size; k++){
        result += Math.min(leftMaxArr[k], rightMaxArr[k]) - height[k]
    }
    
    return result;
};
