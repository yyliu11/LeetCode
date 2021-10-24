/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let size = 32;
    let array = [];
    while(size){
        let int = n & 1;
        array.push(int);
        n = n >> 1;
        size--
    }
    return parseInt(array.join(''), 2)
};