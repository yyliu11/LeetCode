/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length){ return []; }
    var phone = {
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    };
    var output = [];
    var i = 0;
    var l = '';
    var combineLetters = (index, letters)=>{
        if(index >= digits.length){ return output.push(letters)}
        for (var k = 0; k<phone[digits[index]].length;k++){
             combineLetters(index+1, letters + phone[digits[index]][k])
        }
    };
    combineLetters(i,l);
    return output;
};