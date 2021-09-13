/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var brackets = {
        '(':')',
        '{':'}',
        '[':']'
    };
    var container = [];
    for(var i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            container.push(s[i]);
        }else if(s[i] !== brackets[container.pop()]){
            return false;
        }
    }
    return container.length === 0;
};