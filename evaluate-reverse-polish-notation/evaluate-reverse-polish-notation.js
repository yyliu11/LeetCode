/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    for(let ele of tokens){
        if(isNaN(parseInt(ele))){
           let ele2 = stack.pop();
           let ele1 = stack.pop();
           if(ele === '+'){
              stack.push(ele1 + ele2) 
           }
           if(ele === '-'){
              stack.push(ele1 - ele2) 
           }
            if(ele === '*'){
              stack.push(ele1 * ele2) 
           }
            if(ele === '/'){
              stack.push(Math.trunc(ele1 / ele2)) 
           }
        }else{
            stack.push(parseInt(ele))
        }
    }
    return stack[0]
};