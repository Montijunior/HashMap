// run script with Node <filename>.js
class HashMap {
  constructor() {
    this.buckets = [];
    this.buckets.length = 16;
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = [];
    }

    this.keyCount = 0;
  }

  // hash code method
  hash(key) {
    let hashCode = 0;
    let primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }
    return hashCode;
  }

  // set(key, value) :add key-value pair to the hashMap
  set(key, value) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    let bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      let [existingKey] = bucket[i];
      if (existingKey === key) {
        bucket[i] = [key, value];
        return;
      }
    }
    bucket.push([key, value]);
    this.keyCount++;

    //   resize the buckets
    if (this.keyCount / this.buckets.length > 0.75) {
      this.resize(this.buckets.length * 2);
    }
  }

  // resize() method
  resize(newLength) {
    const oldBuckets = this.buckets;
    oldBuckets.length = newLength;
    for (let i = 0; i < oldBuckets; i++) {
      oldBuckets[i] = [];
    }
    this.keyCount = 0;
    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }

  // get(key): returns a value from the key argument
  get(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      return null;
    } else {
      let bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
  }

  // has(key) : returns true or false if key is present in the hash map
  has(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      return false;
    }
    let bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
  }

  // remove(key): removes a key-value pair
  remove(key) {
    let index = this.hash(key);
    const bucket = this.buckets[index];
    if (!bucket) return;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    this.keyCount--;
  }

  // length() : return length of store items
  length() {
    let array = this.buckets;
    return this.keyCount;
  }

  // clear() : remove all entries
  clear() {
    return (this.buckets = []);
  }

  // entries(): return all values in the hash map
  entries() {
    let array = [];
    let buckets = this.buckets;
    for (let i = 0; i < buckets.length; i++) {
      array[i] = buckets[i];
    }
    return array;
  }
}

const map = new HashMap();
map.set("red", "red color");
map.set("green", "green color");
map.set("blue", "blue color");

console.log(map.entries());
console.log(map.length());
