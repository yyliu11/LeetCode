/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var sign = '-';
    var quotient = 0;
    var count = 1;
    if(dividend >= 0 && divisor >= 0 || dividend < 0 && divisor < 0){
        sign = '+';
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while(divisor <= dividend){
       var temp = divisor;
        count = 1;
        while(temp <= (dividend >> 1)){
            temp = temp << 1;
            count = count << 1;
        }
        dividend = dividend - temp;
        quotient += count;
    }
    quotient = sign === '-' ? -quotient : quotient;
    if(quotient >= Math.pow(2, 31)){ return Math.pow(2, 31) - 1; }
    if(quotient < Math.pow(-2, 31)){ return Math.pow(-2, 31); }
    return quotient;
};
