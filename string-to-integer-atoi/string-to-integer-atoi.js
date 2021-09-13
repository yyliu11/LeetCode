/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if(!s.length){ return 0; }
    var sign = '';

var str = s;
    for(var i = 0; i< s.length; i++){
        if(s[i] === ' '){ str = s.slice(i + 1, s.length); }
        else if (s[i] === '+' || s[i] === '-'){
            sign = s[i];
            str = s.slice(i + 1, s.length);
            break;
        }else{
            break;
        }
    }
    var number = 0;
    for(var k = 0; k < str.length; k++){
         if(str[k] === ' ' || isNaN(Number(str[k]))){
            break;
        }
        number = Number(str.slice(0, k + 1));
    }
    number = sign === '-'? -number : number;
    if(number >= Math.pow(2, 31)){ number =  Math.pow(2, 31) - 1; }
    if(number < Math.pow(-2, 31)){ number =  Math.pow(-2, 31) }
    return number;
};