/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle.length){ return 0; }
    var index = haystack.indexOf(needle);
    return index;
};