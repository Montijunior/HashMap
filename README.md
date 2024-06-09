# HashMap

Implementation of a HashMap data structure(manually) and methods.

## Project Description

- A hash map is a data structure which takes a key-value pair, produces a hash code and store the pair in a bucket(array, object or linked-list)
- Hash map are provided by javascript(through the Map Object), the aim of this project was not just to implement a hash map data structure but also to understand the inner logic of the new Map() in javascript.
- Following the implementation the HashMap class, the HashSet class method was implemented which behaves(copies) all methods from the HashMap data structure

### Methods

- hash(key) : the hash method takes a key a produces a hash code
- set(key, value) : the set method takes hash code produce from hash method which produces and index and stores the key-value pair in that location(index).
- get(key) : the get method iterates over the hash map and checks if the provided is in the hash map, if present it return true else it return false.
- remove(key) : the remove method takes a key as argument and iterate over the hash to find the key, if present the key-pair value is spliced(remove) from the bucket .and return true, else it return false.
- keys(): the keys method return all keys stored in the hash map.
- values() : the values method return all values stored in the hash map.
- entries() : the entries method return an array of all key-value pairs in the hash map.
- clear(): the clear method resets the hash map to zero(0) key-value pairs.
- length(): the length method returns the number of key-value pairs in the hash map.
- resize() : the resize check if the length of hash map(initial length = 16) divided by the number of keys is greater that the loadFactor(.75), if it is greater it multiplies the length of hash map by 2, else it returns.

### Run locally

- To run the project locally use: Node index.js (for HashMap class) and Node set.js (HashSet)
