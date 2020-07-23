const quickSort = arr => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = arr.filter(ele => ele < pivot);
  const right = arr.filter(ele => ele > pivot);

  return quickSort(left).concat([pivot], quickSort(right));
}

// TEST CASES
let arr1 = [9, 4, 2, 1, 3, 7, 6];
let arr2 = [100, 25, 50, 43, 90, 63, 12, 77];
let arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(quickSort(arr1));  // [1, 2, 3, 4, 6, 7, 9]
console.log(quickSort(arr2));  // [12, 25, 43, 50, 63, 77, 90, 100]
console.log(quickSort(arr3));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]