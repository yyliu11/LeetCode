/**
 * @param {string} s
 * @return {number}
 */
function DecodeWays(s) {
    this.str = s;
    this.cache = {};
}

DecodeWays.prototype.getNumber = function(s) {
    if (s === '') {
        return 1;
    }
    
    if (s in this.cache) {
        return this.cache[s];
    }
    
    if (s.charAt(0) == '0') {
        return 0;
    }
    
    
    let result = this.getNumber(s.substring(1));
    if (s.length >= 2 && parseInt(s.substring(0,2)) <= 26) {
        result += this.getNumber(s.substring(2));
    }
                                                                                                         this.cache[s] = result;
    
    return result;
}

var numDecodings = function(s) {
    let decoder = new DecodeWays(s);
    return decoder.getNumber(decoder.str);
};