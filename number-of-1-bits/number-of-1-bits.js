/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    let size = 32;
    while(size){
        let int = n & 1;
        if(int === 1){
            count++
        }
        n = n >> 1;
        size--
    }
    return count;
};