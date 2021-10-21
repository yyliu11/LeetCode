/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let alphabetTable = {};
    let leftToRight = '';
    let rightToLeft = '';
    for(let i = 0; i < str.length; i++){
        alphabetTable[str[i]] = str[i];
    }
    
    for(let k = 0; k < s.length; k++){
        if(alphabetTable[s[k].toLowerCase()]){
            leftToRight = leftToRight + s[k].toLowerCase();
            rightToLeft = s[k].toLowerCase() + rightToLeft; 
        }
    }
    return leftToRight === rightToLeft;
};
