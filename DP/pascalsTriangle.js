var generate = function (numRows) {
  let res = [[1]];
  const reqFunc = (n) => {
    if (n === 1) return [1, 1];

    const prevArr = reqFunc(n - 1);

    res.push(prevArr);

    const newArr = [1];

    for (let i = 1; i < n; i++) {
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
