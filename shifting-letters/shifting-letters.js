/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
   var letters = 'abcdefghijklmnopqrstuvwxyz';
    var output = '';
    var increment = 0;
    var alphabetKey = {};
    var alphabetValue = {};
    for(var i = 0; i< letters.length; i++){
        alphabetKey[letters[i]] = i;
        alphabetValue[i] = letters[i];
    }
    for (var k = s.length - 1; k >=0; k--){
        increment += shifts[k];
        var start = alphabetKey[s[k]];
        var end = increment + start;
        var index = end > 26 ? end % 26 : end;
        output = alphabetValue[index] + output
    }
    return output;
};