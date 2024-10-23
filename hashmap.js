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

  doubleArraySizeIfLoadFactorSurpassed() {
    if (this.loadFactor > 0.75) {
      this.arraySize = this.arraySize * 2;
      this.loadFactor = +(this.arrayUsedSpaces / this.arraySize).toFixed(3);
    }
  }

  set(key, value) {
    this.arrayUsedSpaces = this.arrayUsedSpaces + 1;
    this.loadFactor = +(this.arrayUsedSpaces / this.arraySize).toFixed(3);
    this.doubleArraySizeIfLoadFactorSurpassed();
    let hashCode = this.hash(key);
    if (this.array[hashCode] === undefined) {
      this.array[hashCode] = new LinkedList(key, value, null);
    } else {
      this.array[hashCode].append(key, value);
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
      return listToCheck.containsKey(key);
    }
  }
}

export { HashMap };
