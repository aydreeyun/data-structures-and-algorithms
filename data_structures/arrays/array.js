// ARRAY CLASS
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {}; // this is where all the data of the array will be stored
  }

  // O(1)
  // same as arr[index]
  get(index) {
    // lookup in data hash with key of index
    return this.data[index];
  }

  // O(1)
  push(ele) {
    // add element to data hash with the key of the current length
    this.data[this.length] = ele;                     

    // increment the length
    this.length++;                                    
  }

  // O(1)
  pop() {
    // find element at the end of array
    const lastEle = this.data[this.length - 1];

    // delete from data hash
    delete this.data[this.length - 1];
    // decrement length
    this.length--;

    // return the removed element
    return lastEle;
  }

  // O(n)
  shift() {
    // delete at index 0
    return this.delete(0);
  }

  // O(n)
  unshift(ele) {
    // insert the element at index 0
    this.insert(0, ele);
  }

  // O(n)
  insert(index, ele) {
    // iterate through array backwards until you reach the target index
    for (let i = this.length - 1; i >= index; i--) {
      // each element in iteration will have it's index incremented
      this.data[i + 1] = this.data[i];
    }

    // set element to the target index
    this.data[index] = ele;
    // increment the length
    this.length++;
  }

  // O(n)
  delete(index) {
    // get the element at the target index
    const ele = this.data[index];

    // iterate through array from the target index to the end
    for (let i = index; i < this.length - 1; i++) {
      // each element in iteration will have it's index decremented
      this.data[i] = this.data[i + 1];
    }

    // delete the last item (leftover from the iteration)
    delete this.data[this.length - 1];
    // decrement array length
    this.length--;

    // return the deleted element
    return ele;
  }
};

const arr = new MyArray();
console.log(arr); // []
arr.push(1);
console.log(arr); // [1]
arr.push(2);
console.log(arr); // [1, 2]
arr.push(3);
console.log(arr); // [1, 2, 3]
console.log(arr.shift()); // 1
console.log(arr); // [2, 3]
arr.unshift(1);
console.log(arr); // [1, 2, 3]
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]
arr.insert(1, 4);
console.log(arr); // [0, 4, 1, 2, 3]
console.log(arr.pop()); // 3
console.log(arr); // [0, 4, 1, 2]
arr.delete(1)
console.log(arr); // [0, 1, 2]