/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let tempObj = {};
   
    for(let str of strs){
        let sortedStr = str.split('').sort().join('');
        if(tempObj[sortedStr]){
            tempObj[sortedStr].push(str)
        }else{
            tempObj[sortedStr] = [str]
        }
    }
    return Object.values(tempObj)
};