/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.tail === null) this.tail = newNode;

    if (this.head !== null) newNode.next = this.head;

    this.head = newNode;

    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {
    if (this.tail === null) return -1;

    let current = this.head;

    while (current !== null) {
      //If we have found tail, with 2 or more items in linked list
      if (current.next === this.tail) {
        const prevTail = this.tail;
        this.tail = current;
        current.next = null;
        this.length--;
        return prevTail.val;
      }

      //If we have found tail, and tail is also head (only item in list)
      if (current.next === null) {
        const prevTail = this.tail;
        this.tail = null;
        this.head = null;
        this.length--;
        return prevTail.val;
      }

      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) return -1;

    const nextItem = this.head.next;
    const prevHead = this.head;

    if (nextItem !== null) {
      this.head = nextItem;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return prevHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length - 1 || idx < 0) throw new Error("invalid index.");

    let current = this.head;
    let counter = 0;

    while (current !== null) {
      if (counter === idx) {
        return current.val;
      }
      78;

      current = current.next;
      counter++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
