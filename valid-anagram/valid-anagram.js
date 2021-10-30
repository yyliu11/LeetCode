/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){ return false; }
    let obj1 = {};
    let obj2 = {};    
    for(let i = 0; i < s.length; i++){
        if(obj1[s[i]]){
            obj1[s[i]] += 1
        }else{
            obj1[s[i]] = 1
        }
        if(obj2[t[i]]){
            obj2[t[i]] += 1
        }else{
            obj2[t[i]] = 1
        }
    }
    for(let key in obj1){
        if(obj1[key] !== obj2[key]){ return false;}
        delete obj1[key];
        delete obj2[key];
    }
    console.log(obj2)
    return Object.keys(obj2).length === 0;
};