/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    // dp[0] - min flips to have 0
    // dp[1] - min flips to have 1
    let dp = [0, 0];
    let idx = s.length;
    while (idx--) {
        let val = +s[idx];
		// after 0 we can have 0 or 1, select a way with minimum flips
        //val is to plus the cur if turning cur to 0
        //Math.min is to select the right remaining is all 0s or all 1s
		dp[0] = val+Math.min(dp[0], dp[1]);
		// after 1 we can have only 1; add 1 if current char is '0' 
        dp[1] += (1-val);
    }
    //compare turning all to 1s and turning all to 0s(including 00001111)
    return Math.min(dp[0], dp[1]);
};
