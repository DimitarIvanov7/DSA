var generate = function (numRows) {
  const res = [[1]];
  const reqFunc = (n) => {
    if (n === 2) return [1, 1];

    const prevArr = reqFunc(n - 1);

    console.log(prevArr);

    res.push[prevArr];

    const newArr = [1];

    for (let i = 1; i < n - 1; i++) {
      newArr.push(prevArr[i - 1] + prevArr[i]);
    }

    newArr.push(1);

    return newArr;
  };

  reqFunc(numRows);

  return res;
};

const result = generate(5);

console.log(result);
