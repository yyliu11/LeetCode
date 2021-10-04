/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  if (x === 0) {
    return 0;
  }
  let m = Math.abs(n);
    
  function helper(y, k) {
    if (k === 1) {
      return y;
    }
    if (k === 2) {
      return y * y;
    }
    let half = Math.floor(k / 2);
    let rest = k % 2;
    if (rest === 1) {
      return helper(y * y, half) * y;
    }
    return helper(y * y, half);
  }
  let result = helper(x, m);
  if (n < 0) {
    return 1 / result;
  }
  return result;
};