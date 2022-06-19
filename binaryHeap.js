import { justNode } from "./resources.js";

class BinHeap {
	constructor() {
		this.items = [];
		this.selector = (el) => el.val;

		this.swap = (i, index) => {
			let temp = this.items[i];
			this.items[i] = this.items[index];
			this.items[index] = temp;
		};
	}

	maximum() {
		return this.items[0];
	}

	shiftUp(i) {
		let parentIndex = Math.floor((i + 1) / 2 - 1);
		if (parentIndex < 0) parentIndex = 0;
		let parentVal = this.selector(this.items[parentIndex]);

		let pushedVal = this.selector(this.items[i]);

		while (i > 0 && parentVal > pushedVal) {
			parentIndex = Math.floor((i + 1) / 2 - 1);

			this.swap(i, parentIndex);

			i = parentIndex;

			parentVal = this.selector(
				this.items[Math.max(Math.floor((i + 1) / 2 - 1), 0)]
			);
		}
	}

	shiftDown(i) {
		while (true) {
			let rightChildIndex = (i + 1) * 2;
			let leftChildIndex = (i + 1) * 2 - 1;

			let lowest = rightChildIndex;

			if (
				leftChildIndex >= this.items.length &&
				rightChildIndex >= this.items.length
			)
				break;

			if (leftChildIndex >= this.items.length) lowest = rightChildIndex;

			if (rightChildIndex >= this.items.length) lowest = leftChildIndex;

			if (
				!(leftChildIndex >= this.items.length) &&
				!(rightChildIndex >= this.items.length)
			) {
				lowest =
					this.selector(this.items[leftChildIndex]) <
					this.selector(this.items[rightChildIndex])
						? leftChildIndex
						: rightChildIndex;
			}

			if (this.selector(this.items[i]) > this.selector(this.items[lowest])) {
				this.swap(i, lowest);

				i = lowest;
			} else break;
		}
	}

	changePriority(i, newPriority) {
		let priority = this.selector(this.items[i]);

		this.items[i].val = newPriority;

		if (newPriority > priority) this.shiftDown(i);
		else if (newPriority < priority) this.shiftUp(i);
		else return "same";
	}

	insert(node) {
		this.items.push(node);
		this.shiftUp(this.items.length - 1);
	}

	remove() {
		if (this.items.lenght <= 1) return this.items.pop();

		const ret = this.items[0];

		let temp = this.items.pop();

		this.items[0] = temp;
		let i = 0;

		this.shiftDown(i);

		return ret;
	}

	removeAt(i) {
		if (i === 0) this.remove();
		else {
			this.changePriority(i, this.selector(this.maximum()) - 1);
			this.remove();
		}
	}

	getAll() {
		console.log(this.items);
	}
}

const testing = new BinHeap();

testing.insert(new justNode(3));
testing.insert(new justNode(4));
testing.insert(new justNode(1));
testing.insert(new justNode(32));
testing.insert(new justNode(-32));

// testing.remove();
// testing.changePriority(0, 10);

// testing.changePriority(4, -19);

// testing.insert(new justNode(-32));

testing.removeAt(1);

testing.removeAt(0);

testing.getAll();
