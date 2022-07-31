var generate = function (numRows) {
  const reqFunc = (n) => {
    if (n === 1) return [1, 1];

    const prevArr = reqFunc(n - 1);

    const newArr = [1];

    for (let i = 1; i < n; i++) {
      newArr.push(prevArr[i - 1] + prevArr[i]);
    }

    newArr.push(1);

    console.log(n);

    return newArr;
  };

  return reqFunc(numRows);
};

const result = generate(53);

console.log(result);
