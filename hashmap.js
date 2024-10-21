import { LinkedList } from "./LinkedList.js";

class HashMap {
  constructor() {
    this.array = [];
    this.arraySize = 16;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }

    return hashCode;
  }

  set(key, value) {
    let hashCode = this.hash(key);
    if (this.array[hashCode] === undefined) {
      this.array[hashCode] = new LinkedList(key, value, null)
      console.log(this.array);
    } else {
      console.log("ssdfsd");
    }
  }
}

export { HashMap };
