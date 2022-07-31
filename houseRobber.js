const case1 = [2, 7, 99, 3, 1];

const case2 = [1, 2, 3, 1];

const case3 = [50, 100, 51];

const nextHouseIndex = (nums) => {
  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);
  const neighbourSum = nums[maxIndex - 1] + nums[maxIndex + 1];
  return neighbourSum > max
    ? nums[maxIndex - 1] > nums[maxIndex + 1]
      ? maxIndex - 1
      : maxIndex + 1
    : maxIndex;
};

var rob = function (nums, i) {
  if (i > nums.length - 1 || nums[i] === 0) return 0;
  let temp = nums[i];
  nums[i] = 0;

  nums[i + 1] = 0;
  nums[i - 1] = 0;

  return temp + rob(nums, nextHouseIndex(nums));
};
console.log(nextHouseIndex(case1));
const result = rob(case1, nextHouseIndex(case1));

console.log(result);
