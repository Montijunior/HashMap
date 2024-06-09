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
}

const map = new HashMap(16);
console.log(map.hash("Junior"));
