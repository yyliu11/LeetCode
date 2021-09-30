/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let output = [];

    const findLabel = function(str){
        var last = str[str.length - 1];
        let index = str.indexOf(last);
        
        for(let i = str.length - 2; i > index; i--){
          if(str.indexOf(str[i]) < index){
             index = str.indexOf(str[i]) 
          }
          if(!index){ break; }
      }
        output.unshift(str.length - index);
        if(index){ findLabel(str.slice(0,index)) }
    }
    findLabel(s);
    return output;
};

