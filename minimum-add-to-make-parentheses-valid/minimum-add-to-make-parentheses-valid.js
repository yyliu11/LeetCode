/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let count = 0;
    let temp = [];
    for(let paren of s){
       if(paren === '('){
           temp.push(paren)
       }else{
           if(paren === ')'){
               if(temp.length){
                  temp.pop() 
               }else{
                  count++ 
               }    
           }
       }
    }
    return count + temp.length;
};