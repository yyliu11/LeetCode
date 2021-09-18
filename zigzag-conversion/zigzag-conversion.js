/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1){ return s; }
    var arr = [];
    for(var k = 0; k < numRows; k++){
        arr.push('');
    }
    var count = 0;
    var direction = true;

    for(var i = 0; i < s.length; i++){
        if(count < numRows && direction){
            arr[count] += s[i];
            count++;
            continue
        }
        if(count >= numRows){
            count = numRows - 1;
            direction = false
        }
        
        if(count >= 0 && !direction){
           arr[count - 1] += s[i];
           count--
        }
        if(count === 0){
            direction = true;
            count++
        }
    }
    var output = '';
    for(var j = 0; j < arr.length; j++){
        output += arr[j];
    }
    return output;
};