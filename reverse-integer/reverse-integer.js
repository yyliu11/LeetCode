/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var y = Math.abs(x);
    var str = y.toString();
    var reverseNum = 0;
    var reverseStr = '';
    for(var i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }
    reverseNum = Number(reverseStr);
    if(reverseNum < Math.pow(-2, 31) || reverseNum > Math.pow(2, 31) - 1){ return 0; }
    return y === x ? reverseNum : -reverseNum;
};