/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length === 0){ return 0; }
    var amount = 0;
    var temp = 0;
    var l = 0;
    var r = height.length - 1;
    while(l < r){
        temp = Math.min(height[l], height[r]);
        amount = Math.max(amount, temp * (r - l));
        height[l] > height[r] ? r-- : l++
    }
    return amount;
};