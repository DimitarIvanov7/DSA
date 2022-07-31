const checkSubs = (s, t) => {
  const stack = {
    data: [],
    isIn: function (el) {
      return this.data.includes(el);
    },
    getLength: function () {
      return this.data.length;
    },
    peek: function () {
      return this.data[this.getLength() - 1];
    },
    push: function (el) {
      this.data.push(el);
    },
    pop: function () {
      this.data.pop();
    },
    getStack: function () {
      return this.data;
    },
  };

  for (let i = s.length - 1; i > -1; i--) {
    stack.push(s[i]);
  }

  for (let char of t) {
    if (stack.isIn(char)) {
      if (char === stack.peek()) stack.pop();
    }
  }

  return stack.getLength() === 0;
};

const result = checkSubs("abc", "ahbgdc");

console.log(result);
