function getDigit(number, n) {
  console.log("i is: " + n);
  return Math.floor((number / Math.pow(10, n - 1)) % 10);
}

function getDigitCount(number) {
  return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
}

var isHappy = function (n) {
  const lastDigit = Math.floor((n / 1) % 10);

  console.log(lastDigit);

  let result = n;

  let i = 1;

  while (result != 0) {
    for (let i = 0; i < getDigitCount(n); i++) {}
  }

  console.log(result);
};

const num = 193;

const data = isHappy(num);

console.log(data);
