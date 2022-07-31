var topKFrequent = function (nums, k) {
  const maxArr = [];

  const initialArr = new Array(Math.max(...nums) + 1).fill(0);

  const min = Math.min(...nums) * -1;

  const negativeArr = new Array(min + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    let index = nums[i];
    if (index >= 0) initialArr[index]++;
    else {
      negativeArr[index * -1]++;
    }
  }

  for (let i = 0; i < k; i++) {
    let maxPos = Math.max(...initialArr);
    let maxNeg = Math.max(...negativeArr);
    maxArr.push(
      maxPos > maxNeg
        ? initialArr.indexOf(maxPos)
        : negativeArr.indexOf(maxNeg) * -1
    );
    if (maxPos > maxNeg) initialArr[initialArr.indexOf(maxPos)] = -1;
    else negativeArr[negativeArr.indexOf(maxNeg)] = -1;
  }

  return maxArr;
};

let nums = [4, 1, -1, 2, -1, 2, 3];

let k = 2;
const data = topKFrequent(nums, k);

console.log(data);
