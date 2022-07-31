import { singleNode } from "./resources.js";

class LinkedSingle {
	constructor() {
		this.head = new singleNode(null);
		this.tail = new singleNode(null);
		this.trav = new singleNode(null);
		this.size = 0;
	}

	addLast(node) {
		if (this.size === 0) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = this.tail.next;
		}
		this.size++;
	}

	addFirst(node) {
		if (this.size === 0) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}

	removeFirst() {
		if (this.size === 0) {
			return "empty";
		}
		let oldHead = this.head;

		this.head = this.head.next;

		this.size--;

		if (this.size === 0) {
			this.tail = null;
			return;
		}

		oldHead = null;
	}

	removeLast() {
		if (this.size === 0) {
			return "empty";
		}

		this.trav = this.head;

		for (let i = 0; i < this.size - 1; i++) {
			this.trav = this.trav.next;
		}

		this.tail = this.trav;

		this.size--;

		if (this.size === 0) {
			this.head = null;
			return;
		}

		this.tail.next = null;
	}

	remove(prevNode, node) {
		prevNode.next = node.next;
		node = null;
		this.size--;
	}

	removeAt(index) {
		if (this.size === 0) {
			return "empty";
		}

		this.trav = this.head;

		for (let i = 0; i !== index - 1; i++) {
			this.trav = this.trav.next;
		}

		return this.remove(this.trav, this.trav.next);
	}

	printAll() {
		this.trav = this.head;
		for (let i = 0; i < this.size; i++) {
			if (this.trav !== null) {
				console.log(this.trav.val);
				this.trav = this.trav.next;
			}
		}
	}

	getHead() {
		return this.head && this.head;
		// return this.head ? this.head.val : null;
	}

	getTail() {
		return this.tail && this.tail;
		// return this.tail ? this.tail.val : null;
	}

	getSize() {
		return this.size;
	}
}
const testing = new LinkedSingle();
testing.addLast(new singleNode(1));
testing.addLast(new singleNode(5));
testing.addLast(new singleNode(15));
testing.addLast(new singleNode(65));
testing.addLast(new singleNode(51));
testing.addLast(new singleNode(45));
testing.addLast(new singleNode(95));
testing.addFirst(new singleNode(-10));

testing.removeAt(3);

// const headData = testing.getHead();

// console.log(headData);

const tailData = testing.getTail();

console.log(tailData);

// testing.remove(testing.getHead().next.next);

// console.log(testing.printAll());
