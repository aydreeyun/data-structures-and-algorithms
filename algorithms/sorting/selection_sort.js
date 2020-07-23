const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIdx = j;
      }
    }

    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  return arr;
}

// TEST CASES
let arr1 = [9, 4, 2, 1, 3, 7, 6];
let arr2 = [100, 25, 50, 43, 90, 63, 12, 77];
let arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(selectionSort(arr1));  // [1, 2, 3, 4, 6, 7, 9]
console.log(selectionSort(arr2));  // [12, 25, 43, 50, 63, 77, 90, 100]
console.log(selectionSort(arr3));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]