const arr = [10, 15, 20];

var minCostClimbingStairs = function (cost) {
  const reqFunc = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n === cost.length - 1) return cost[n];
    if (n > cost.length - 1) return 0;

    memo[n] = cost[n] + Math.min(reqFunc(n + 1, memo), reqFunc(n + 2, memo));
    return memo[n];
  };

  return Math.min(reqFunc(0), reqFunc(1));
};

const result = minCostClimbingStairs(arr);

console.log(result);
