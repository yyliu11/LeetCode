/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var number = 0;
    var instances = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
        'IV':4,
        'IX':9,
        'XL':40,
        'XC':90,
        'CD':400,
        'CM':900
    };
    if(instances[s]){ return instances[s]; }
    for(var i = 0; i<s.length;i++){
        if(instances[s.slice(i,i+2)]){
            number += instances[s.slice(i,i+2)];
            i++;
        }else{
            number += instances[s[i]]
        }
    }
    return number;
};