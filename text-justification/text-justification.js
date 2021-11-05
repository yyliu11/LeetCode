/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let index = 0;
    let curArr = [];
    let curLen = 0;
    let res = [];
    
    const arrangeLetters = (arr, num) => {
        let str = arr[0];
        let spaces = maxWidth - num;
        let intervals = arr.length - 1;
        if(!intervals){
            return leftAlign(arr, num)
        }
        let average = Math.floor(spaces/intervals);
        let remaining = spaces%intervals;
        let spaceStr = '';
        for(let k = 0; k < average;k++) {
            spaceStr += ' '
        }
        for(let i = 1; i < arr.length; i++) {
            if(remaining) {
                str += ' ' + spaceStr + ' ' + arr[i];
                remaining--
            }else{
                str += spaceStr + ' ' + arr[i];
            }
        }
        return str;
    };
    
    const leftAlign = (arr,num) => {
        let str = arr[0];
        let spaces = maxWidth - num;
        let spaceStr = '';
        for(let k = 0; k < spaces;k++) {
            spaceStr += ' '
        }
        for(let i = 1; i < arr.length; i++) {
            str += ' ' + arr[i];
        }
        return str + spaceStr;
    };
    
    while(index < words.length) {
        let size = words[index].length + curLen;
        if(curLen > 0) { size++; }
        if(size > maxWidth) {
            res.push(arrangeLetters(curArr,curLen));
            curArr = [];
            curLen = 0;
        }else{
            curArr.push(words[index]);
            curLen = size;
            index++
        }
    }
    if(curLen > 0) {
        res.push(leftAlign(curArr, curLen))
    }
    return res;
};

words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16