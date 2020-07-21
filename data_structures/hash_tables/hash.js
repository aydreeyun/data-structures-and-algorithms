// HASH CLASS
class Hash {
  constructor(size) {
    // initialize an array of a fixed size to contain buckets
    this.data = new Array(size);
  }

  // SIMPLE CUSTOM HASHING FUNCTION - NOT ACTUAL
  // NO NEED TO LEARN THIS, JUST KNOW THAT KEYS ARE HASHED 
  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  // HASH SETTER
  // SIMILAR TO hash[key] = value
  set(key, value) {
    // first you hash the key in order to place it in a bucket
    const hashedKey = this._hash(key);

    // if the bucket does not exist, initalize it with an array
    if (!this.data[hashedKey]) {
      this.data[hashedKey] = [];
    }

    // push the key and value into the bucket
    this.data[hashedKey].push([key, value]);
    // optionally return the hash with all buckets
    return this.data;
  }

  // HASH GETTER
  // SIMILAR TO hash[key]
  get(key) {
    // in order to get the bucket the data is stored in, you must hash the key
    const hashedKey = this._hash(key);
    // then we find which bucket the data is located
    const currentBucket = this.data[hashedKey];

    // if the bucket exists, iterate through the bucket
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        // if the key matches the first item (stored key), return the second item (stored value)
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    // if no bucket is found, return undefined
    return undefined;
  }
}

const newHash = new Hash(50); // array of 50 buckets
newHash.set('a', 1);  // ['a', 1] will be stored in one of the buckets
console.log(newHash.get('a'));  // 1
newHash.set('b', 2);  // ['b', 2] will be stored in one of the buckets
console.log(newHash.get('b'));  // 2
console.log(newHash);