/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1){ return strs[0]; }
    var output = '';
    for(var i = 0; i < strs[0].length; i++){
        for(var k = 0; k < strs.length; k++){
            if(strs[0][i] !== strs[k][i]){
                return output;
            }
        }
        output += strs[0][i];
    }
    return output;
};