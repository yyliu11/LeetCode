/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    if (s === null || s.length === 0) return 0
    let ones = 0
    let flip = 0
    
    for (const c of s) {
        if (c === '0') {
            if (ones !== 0) {
                flip++
            } else continue
        } else {
            ones++
        }
        
        if (flip > ones) flip = ones
    }
    
    return flip
};