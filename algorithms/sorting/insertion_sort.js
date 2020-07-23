const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    const currEle = arr[i];

    for (var j = i - 1; j >= 0 && currEle < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currEle;
  }

  return arr;
}

// TEST CASES
let arr1 = [9, 4, 2, 1, 3, 7, 6];
let arr2 = [100, 25, 50, 43, 90, 63, 12, 77];
let arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(insertionSort(arr1));  // [1, 2, 3, 4, 6, 7, 9]
console.log(insertionSort(arr2));  // [12, 25, 43, 50, 63, 77, 90, 100]
console.log(insertionSort(arr3));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]