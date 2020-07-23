const bubbleSort = (arr) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }

  return arr;
}

// TEST CASES
let arr1 = [9, 4, 2, 1, 3, 7, 6];
let arr2 = [100, 25, 50, 43, 90, 63, 12, 77];
let arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(bubbleSort(arr1));  // [1, 2, 3, 4, 6, 7, 9]
console.log(bubbleSort(arr2));  // [12, 25, 43, 50, 63, 77, 90, 100]
console.log(bubbleSort(arr3));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]