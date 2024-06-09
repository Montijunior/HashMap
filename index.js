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
    if (this.buckets[index]) {
      let bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }

  // length() : return length of store items
  length() {
    let array = this.buckets;
    return array.length;
  }

  // clear() : remove all entries
  clear() {
    return (this.buckets = []);
  }
}

const map = new HashMap(16);
map.set("red", "color one");
map.set("green", "color two");
map.set("blue", "color three");
map.set("red", "modified");
map.set("indigo", "indigo value");
// map.clear();
console.log(map.length());
