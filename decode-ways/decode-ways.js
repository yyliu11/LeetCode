/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = new Array(s.length + 1);
    dp[0] = 1;
    if(s[0] === '0'){ return 0; }else{ dp[1] = 1}
    for(let i = 2; i <= s.length; i++){
        if(s[i-1] === '0'){
            if(s[i - 2] === '1' || s[i - 2] === '2'){
                dp[i] = dp[i-2]
            }else{ return 0 }
        }
        else if(s[i - 2] === '1' || s[i - 2] === '2' && Number(s[i - 1]) < 7){
            dp[i] = dp[i-1] + dp[i-2]
        }
        else{
            dp[i] = dp[i-1]
        }
    }
    return dp[dp.length - 1]
};