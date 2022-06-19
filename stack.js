const stack = {
	initStack: [],

	isEmpty: function () {
		return this.initStack.length === 0;
	},
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
};

// valid parentheses check using stack

// const parethList = "()[]{}";

// const parethList1 = "(";

const checkParanth = (str) => {
	if (str.length === 0) return true;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "(") {
			stack.add(")");
		} else if (str[i] === "{") {
			stack.add("}");
		} else if (str[i] === "[") {
			stack.add("]");
		} else {
			if (stack.peek() === str[i]) stack.pop();
			else return false;
		}
	}

	return stack.isEmpty();
};

console.log(checkParanth(parethList1));
