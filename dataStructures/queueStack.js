var MyQueue = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

MyQueue.prototype.stack = function () {
  return this.stack;
};

MyQueue = new MyQueue();

MyQueue.push(1);

MyQueue.push(2);

MyQueue.peek();

MyQueue.pop();

MyQueue.empty();

MyQueue.stack();

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
