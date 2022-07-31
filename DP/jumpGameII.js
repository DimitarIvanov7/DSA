const arr = [2, 2, 2, 2];

const jump = function (nums) {
  const recFunc = (pos) => {
    if (nums[pos] === 0 || nums.length === 1) return 0;
    if (pos >= nums.length - 1 || nums[pos] + pos >= nums.length - 1) return 1;
    const jumps = nums[pos];
    let max = 0;
    let newIndex;
    for (let i = pos; i <= pos + jumps; i++) {
      if (nums[i] > max) {
        max = nums[i];
        newIndex = i;
      }
    }
    let result = 1 + recFunc(newIndex);
    return result;
  };

  return recFunc(0);
};

const result = jump(arr);

console.log(result);
