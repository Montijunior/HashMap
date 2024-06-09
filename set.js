import HashMap from ".";

// create HashSet class which has all the method of the HashMap
class HashSet {
  constructor() {
    this.map = new HashMap();
  }

  add(key) {
    return this.map.set(key, value);
  }

  has(key) {
    return this.map.has(key);
  }

  remove(key) {
    return this.map.remove(key);
  }

  clear() {
    return this.map.clear();
  }

  keys() {
    return this.map.keys();
  }

  values() {
    return this.map.values();
  }
}

const setMap = new HashSet();
