class binaryNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class binaryTree {
	constructor() {
		this.root = new binaryNode(1);
		this.size = 0;
	}

	findPlace(node) {
		if (node.left === null) {
			node.left = node;
			this.size++;
			return;
		} else if (node.right === null) {
			node.right = node;
			this.size++;
			return;
		}

		this.findPlace(node.left);
		this.findPlace(node.right);
	}

	add() {
		const curr = this.root;
	}

	count(node) {
		if (node.left === null) return 1;
		if (node.right === null) return 1;

		this.getSize(node.left + 1);
		this.getSize(node.right + 1);
	}

	getSize() {
		return this.count(this.root);
	}
}

const tree = new binaryTree();

tree.add(new binaryNode(2));

tree.add(new binaryNode(5));
tree.add(new binaryNode(6));

console.log(tree.getSize());

console.log(tree.root);
