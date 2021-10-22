/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
	// We use a set to optimize lookup of the substrings
    return helper(s, new Set(wordDict));
};

function helper(s, wordSet) {
    const domain = new Array(s.length).fill(false);
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            domain[i] = domain[i] || (domain[j] && wordSet.has(s.substring(i, j)));
            if (domain[i])
                break;
        }
        domain[i] = domain[i] || wordSet.has(s.substring(i));
    }
    return domain[0];
}