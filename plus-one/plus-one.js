/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1;
    var output = [];
 
    for(var i = digits.length - 1; i >= 0; i--){
        var sum = digits[i] + carry;
        carry = 0;
        if(sum > 9){
            sum = 0;
            carry = 1
        }
        output.unshift(sum);
    }
    if(carry === 1){
        output.unshift(1)
    }
    return output;
};