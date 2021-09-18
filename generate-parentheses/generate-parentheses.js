/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var output = [];
    var leftCount = 0;
    var rightCount = 0;
    var parentheses = '';
    var createCombos = (left,right,parens)=>{
        if(right === n){
            output.push(parens);
            return
        }
        if(left < n){
            createCombos(left + 1, right, parens + '(')
        }
        if(right < left){
            createCombos(left, right + 1, parens + ')')
        }
    }
    createCombos(leftCount, rightCount, parentheses);
    return output;
};