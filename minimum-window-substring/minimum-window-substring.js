/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s===t){ return s }
    let tMap = {};
    let sMap = {};
    let count = 0;
    let newCount = 0;
    let min = Infinity;
    let output = '';
    let left=0;
    
    //map t and count how many unique chars in t
    for(let char of t){
        if(tMap[char]){
            tMap[char]++
        }else{
            tMap[char]=1;
            count++
        }
    }
    //move the right pointer until find the window that covers t
    for(let i = 0; i<s.length;i++){
     
        if(sMap[s[i]]){ sMap[s[i]]++ }else{ sMap[s[i]]=1 }
        
        if(tMap[s[i]] && tMap[s[i]] === sMap[s[i]]){ newCount++ }
        
        //
        while(newCount === count && left <= i){
            if(min>i-left+1){
                min = i - left + 1;
                output = s.slice(left, i + 1)
            }
            sMap[s[left]]--;
            if(tMap[s[left]] && sMap[s[left]] < tMap[s[left]]){ newCount-- }
            left++
        }
    }
    return output;
};
