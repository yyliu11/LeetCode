/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s.length){ return ''; }
    var longest = '';
    for(var i = 0; i < s.length; i++){
        var evenPalindrome = expandFromCenter(s, i-1, i);
        var oddPalindrome = expandFromCenter(s, i, i);
        if(evenPalindrome.length > longest.length){
            longest = evenPalindrome;
        }
        if(oddPalindrome.length > longest.length){
            longest = oddPalindrome
        }
    }
    return longest;
};

var expandFromCenter = (str, left, right)=>{
    var k = 0;
    while(str[left - k] && str[left - k] === str[right + k]){
        k++
    }
    k--;
    return str.slice(left - k, right + k + 1);
};