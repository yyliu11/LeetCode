/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let str = chars[0];
    let count = 0;
    let size = chars.length-1;

    while(size >= 0){
        if(chars[0] !== str){
            chars.push(str);
            str = chars[0];
            if(count >= 10){
               for(let num of count.toString()){
                   chars.push(num)
               } 
            }else if(count > 1){
                chars.push(count.toString())
            }
            count = 1;
        }else{
            count++;
        }
        chars.shift()
        size--
    }
     chars.push(str);
      if(count >= 10){
               for(let num of count.toString()){
                   chars.push(num)
               } 
            }else if(count > 1){
                chars.push(count.toString())
            }
 
    return chars.length
};
