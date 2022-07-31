const fib = (n) => {
  let first = 0;
  let second = 1;
  let res;

  for (let i = 0; i < n; i++) {
    res = first + second;
    first = second;
    second = res;
  }

  console.log(res);
};

// fib(5);

const memos = [];

const fibRec = (n) => {
  if (n < 2) return 1;

  return fibRec(n - 1) + fibRec(n - 2);
};

const test = fibRec(41);

console.log(test);
