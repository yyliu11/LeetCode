/**
 * @param {number} n
 * @return {number}
 *///fibonacci problem: n = (n-1) + (n-2)
const fib = { 1: 1, 2: 2 };
const climbStairs = (n) => {
  return fib[n] || ((fib[n] = climbStairs(n - 1) + climbStairs(n - 2)), fib[n]);
};
