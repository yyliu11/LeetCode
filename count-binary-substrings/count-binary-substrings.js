/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
let current = 1;
let previous = 0;	
let result = 0;
for(let i = 1; i<s.length ; i++){
    if(s[i] === s[i-1]){
        current++;
    }
    else{
        result += Math.min(current,previous);
        previous = current;
        current  = 1;
    }
}
return result + Math.min(current,previous);
};
