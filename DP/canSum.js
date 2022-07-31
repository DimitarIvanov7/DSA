const arr = [1, 2, 3];

var combinationSum4 = function (nums, target, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return 1;
  if (target < 0) return 0;

  let result = 0;

  for (let num of nums) {
    memo[target] = result += combinationSum4(nums, target - num);
  }

  return memo[target];
};

const result = combinationSum4(arr, 4);

console.log(result);
