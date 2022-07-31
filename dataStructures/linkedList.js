import { ListNode } from "../resources.js";

class Linked {
  constructor() {
    this.head = new ListNode(null);
    this.tail = new ListNode(null);
    this.trav = new ListNode(null);
    this.size = 0;
  }

  addLast(node) {
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
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
      this.head.prev = node;
      this.head = this.head.prev;
    }
    this.size++;
  }

  removeFirst() {
    if (this.size === 0) {
      return "empty";
    } else {
      this.head = this.head.next;
    }
    this.size--;

    if (this.size === 0) {
      this.tail = null;
      return;
    }

    this.head.prev = null;
  }

  removeLast() {
    if (this.size === 0) {
      return "empty";
    } else {
      this.tail = this.tail.prev;
    }

    this.size--;

    if (this.size === 0) {
      this.head = null;
      return;
    }

    this.tail.next = null;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node = null;
    this.size--;
  }

  removeAt(index) {
    if (index < this.size / 2) {
      this.trav = this.head;
      for (let i = 0; i != index; i++) {
        this.trav = this.trav.next;
      }
    } else {
      this.trav = this.tail;
      for (let i = this.size - 1; i != index; i--) {
        this.trav = this.trav.prev;
      }
    }

    return this.remove(this.trav);
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
    // return this.size;

    return this.countRec(this.head);
  }

  countReq(node) {
    if (node == null) return 0;
    return this.count(node.next) + 1;
  }
}

const testing = new Linked();
testing.addLast(new ListNode(1));
testing.addLast(new ListNode(5));
testing.addLast(new ListNode(15));
testing.addLast(new ListNode(65));
testing.addLast(new ListNode(51));
testing.addLast(new ListNode(45));
testing.addLast(new ListNode(95));
// testing.removeAt(3);

// testing.remove(testing.getHead().next.next);

// console.log(testing.printAll());

console.log(testing.getSize());
