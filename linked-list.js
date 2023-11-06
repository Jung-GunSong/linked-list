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

      current = current.next;
      counter++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length - 1 || idx < 0) throw new Error("invalid index.");

    let current = this.head;
    let counter = 0;

    while (current !== null) {
      if (counter === idx) {
        current.val = val;
      }

      current = current.next;
      counter++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) throw new Error("invalid index.");

    let newNode = new Node(val);
    let current = this.head;
    let counter = 0;

    if (idx === 0) return this.unshift(val);

    if (idx === this.length) return this.push(val);

    while (current !== null) {
      if (counter === idx - 1) {
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
      }

      current = current.next;
      counter++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length - 1 || idx < 0) throw new Error("invalid index.");

    if (idx === 0) return this.shift();

    let current = this.head;
    let counter = 0;

    while (current !== null) {
      if (counter === idx - 1) {
        const nextVal = current.next;
        current.next = current.next.next;
        this.length--;
        return nextVal.val;
      }

      current = current.next;
      counter++;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let sum = 0;
    let current = this.head;

    while (current !== null) {
      sum += current.val;

      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
