const stack = {
  initStack: [1],
  peek: function () {
    if (this.initStack.length === 0) return "Empty";
    return this.initStack[0];
  },
  pop: function () {
    this.initStack.shift();
  },
  add: function (x) {
    this.initStack.unshift(x);
  },
  get: function () {
    return this.initStack;
  },
  getArr: () => {
    return this.initStack;
  },
};

stack.add(2);
stack.add(22);
stack.pop();
stack.pop();
stack.pop();
const check = stack.peek.bind(stack);

console.log(stack.get());

console.log(check());

console.log(stack.peek());
