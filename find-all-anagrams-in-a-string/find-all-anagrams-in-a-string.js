/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const equalVal = (arr1, arr2)=>{
    for(let j = 0; j < arr1.length; j++){
        if(arr1[j] !== arr2[j]) return false;
    }
    return true;
};

var findAnagrams = function(s, p) {
    let pArr = new Array(26).fill(0);
    let sArr = new Array(26).fill(0);
    let res = [];
    
    for(let k = 0; k < p.length; k++){
        let index = p.charCodeAt(k) % 26;
        pArr[index]++
    }
    
    for(let i = 0; i < s.length; i++){
        let idx = s.charCodeAt(i) % 26;
        sArr[idx]++;
        
        if(i > p.length - 1){
            let head = s.charCodeAt(i - p.length) %26;
            sArr[head]--
        }
        if(i >= p.length - 1){
            if(equalVal(pArr,sArr)){
                res.push(i - p.length + 1)
            }
        }
    }
    return res
};