function longestConsecutive(nums) {
  if (nums.length <= 0) return 0;

  const posArr = new Array(Math.max(...nums) + 1).fill(0);

  const min = Math.min(...nums) * -1;

  const negativeArr = new Array(min + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > -1) posArr[nums[i]] = 1;
    else negativeArr[nums[i] * -1 - 1] = 1;
  }

  const finalArr = negativeArr.reverse().concat(posArr);

  let biggest = 0;

  let current = 0;

  for (let i = finalArr.length - 1; i > 0; i--) {
    if (finalArr[i]) {
      current++;
      biggest = Math.max(biggest, current);
    } else {
      current = 0;
    }
  }

  return biggest;
}

const arr = [
  4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3,
];

const data = longestConsecutive(arr);

console.log(data);
