// run script with Node <filename>.js
class HashMap {
  constructor(size) {
    this.buckets = [];
    this.size = size;
  }

  // hash code method
  hash(key) {
    let hashCode = 0;
    let primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
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
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
      }
    }
    bucket.push([key, value]);
  }
}

const map = new HashMap(16);
map.set("red", "color one");
map.set("green", "color two");
map.set("blue", "color three");
map.set("red", "modified");
console.log(map.hash("red"));
