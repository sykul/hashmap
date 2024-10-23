class ListNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(initialKey, initialValue) {
    this.node = new ListNode(initialKey, initialValue, null);
    this.head = { ...this.node };
    this.tail = { ...this.node };
    this.length = 1;
  }

  append(key, value) {
    let tmp = this.head;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    tmp.next = new ListNode(value, null);
    this.tail = tmp.next;
    this.length += 1;
  }

  prepend(value) {
    let newNode = new ListNode(value, this.head);
    this.head = newNode;
    this.length += 1;
  }

  get size() {
    // return total number of nodes in list
    return this.length;
  }

  get gethead() {
    // returns first node in list
    return this.head;
  }

  get gettail() {
    // returns first node in list
    return this.tail;
  }

  at(index) {
    // returns the node at the given index
    let i = 0;
    let tmpNode = this.head;
    while (i < index) {
      console.log(`index: ${i}, tmpNode: ${tmpNode}`);
      tmpNode = tmpNode.next;
      if (tmpNode === null) {
        return "index not available";
      }
      i++;
    }
    return tmpNode;
  }

  pop() {
    // removes last element
    let tmpNode = this.head;
    if (this.length === 0) {
      return;
    }
    while (tmpNode.next !== null) {
      tmpNode = tmpNode.next;
    }
    tmpNode = null;
    this.tail = null;
    this.length = this.length - 1;
  }

  contains(searchValue) {
    // returns true if list contains value
    let tmpNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (tmpNode.value === searchValue) {
        return true;
      }
      tmpNode = tmpNode.next;
    }
    return false;
  }

  find(searchValue) {
    // return index of node containing value, or null if not found
    let tmpNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (tmpNode.value === searchValue) {
        return i;
      }
      tmpNode = tmpNode.next;
    }
    return null;
  }

  findValueOfKey(searchKey) {
    // return index of node containing value, or null if not found
    let tmpNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (tmpNode.key === searchKey) {
        return tmpNode.value;
      }
      tmpNode = tmpNode.next;
    }
    return null;
  }

  toString() {
    // represents LinkedList objects as strings
    // format: ( value ) -> ( value ) -> ( value ) -> null
    let tmpNode = this.head;
    let myString = `( ${tmpNode.value} )`;
    tmpNode = tmpNode.next;
    while (tmpNode !== null) {
      myString = `${myString} -> ( ${tmpNode.value} )`;
      tmpNode = tmpNode.next;
    }
    myString = `${myString} -> ( ${tmpNode} )`;
    return myString;
  }

  // extra credit

  insertAt(value, index) {
    // inserts a node with 'value' at 'index'
  }

  removeAt(index) {
    // removes the node at 'index'
  }
}

export { LinkedList };
