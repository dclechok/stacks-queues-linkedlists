const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.insert(value);
    return this.linkedList.value;
  }

  dequeue() {
//     if(!this.isEmpty)
    return this.linkedList.remove(node => node === this.linkedList.head);
  }

  peek() {
    return this.linkedList.head.value;
  }

  isEmpty() {
    return this.linkedList.length === 0 ? true : false;
  }
}

module.exports = Queue;
