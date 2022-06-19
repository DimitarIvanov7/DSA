export class ListNode {
	constructor(val, prev = null, next = null) {
		this.prev = prev;
		this.next = next;
		this.val = val;
	}
}

export class singleNode {
	constructor(val, next = null) {
		this.next = next;
		this.val = val;
	}
}

export class justNode {
	constructor(val) {
		this.val = val;
	}
}
