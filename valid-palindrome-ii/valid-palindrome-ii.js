/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    for(let i = 0, j = s.length-1; i <= j; i++, j--){
        if(s[i] !== s[j]){
           return isPalindrome(i, j-1, s) || isPalindrome(i+1, j, s);
        }
    }
    return true;
};

function isPalindrome(i, j, str){

    for(; i <= j; i++, j--){
        if(str[i] !== str[j]) return false;
    }
    return true;
}