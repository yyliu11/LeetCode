/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let max = 1;
   
    if(s.length === 0){ return 0; }

    for(var i = 0; i < s.length - 1; i++){
         let count = 1; 
        let subStr = s[i];
        for(var k = i + 1; k < s.length; k++){
            if(subStr.indexOf(s[k]) !== -1){
                if(count > max){
                    max = count;
                }
               break; 
            }else{
                count++;
                subStr += s[k];
            }
        }
        if(count > max){
            max = count;
        }
    }
    return max;
};

