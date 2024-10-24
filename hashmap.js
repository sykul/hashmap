import { LinkedList } from "./LinkedList.js";

class HashMap {
  constructor() {
    this.array = [];
    this.arraySize = 16;
    this.arrayUsedSpaces = 0;
    this.loadFactor = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.arraySize;
    }

    return hashCode;
  }

  doubleArraySize() {
    this.arraySize = this.arraySize * 2;
    let tmpArray = [];
    this.array.forEach((item) => {
      let tmpNode = item.head;
      while (tmpNode !== null) {
        let hashCode = this.hash(tmpNode.key);
        if (tmpArray[hashCode] === undefined) {
          tmpArray[hashCode] = new LinkedList(tmpNode.key, tmpNode.value, null);
        } else {
          tmpArray[hashCode].append(tmpNode.key, tmpNode.value);
        }
        tmpNode = tmpNode.next;
      }
    });
    this.loadFactor = +(this.arrayUsedSpaces / this.arraySize).toFixed(3);
  }

  set(key, value) {
    let hashCode = this.hash(key);
    if (this.array[hashCode] === undefined) {
      this.array[hashCode] = new LinkedList(key, value, null);
      this.arrayUsedSpaces = this.arrayUsedSpaces + 1;
    } else if (this.array[hashCode].append(key, value)) {
      this.arrayUsedSpaces = this.arrayUsedSpaces + 1;
    }
    this.loadFactor = +(this.arrayUsedSpaces / this.arraySize).toFixed(3);
    if (this.loadFactor > 0.75) {
      this.doubleArraySize();
    }
  }

  get(key) {
    let currentHash = this.hash(key);
    if (this.array[currentHash] === undefined) {
      return null;
    } else {
      let listToCheck = this.array[currentHash];
      return listToCheck.findValueOfKey(key);
    }
  }

  has(key) {
    let currentHash = this.hash(key);
    if (this.array[currentHash] === undefined) {
      return null;
    } else {
      let listToCheck = this.array[currentHash];
      return listToCheck.containsKey(key);
    }
  }

  remove(key) {
    let currentHash = this.hash(key);
    if (this.array[currentHash] === undefined) {
      return false;
    } else {
      let listToCheck = this.array[currentHash];
      return listToCheck.deleteNodeByKey(key);
    }
  }
}

export { HashMap };
