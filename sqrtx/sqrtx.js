/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
   var count = 1;
    var sqrt = 1;
    if(!x || x === 1){ return x; }
    
    while(sqrt <= x){
        
        if(sqrt === x){ return count; }
        count++;
        sqrt = count * count;
    }
    return count - 1;
};