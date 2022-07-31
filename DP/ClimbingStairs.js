var climbStairs = function (n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 1;
  if (n < 0) return 0;

  memo[n] = climbStairs(n - 2, memo) + climbStairs(n - 1, memo);
  return memo[n];
};

const result = climbStairs(44);

console.log(result);
