const mergeSort = arr => {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

const merge = (left, right) => {
  const merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left, right);
}

// TEST CASES
let arr1 = [9, 4, 2, 1, 3, 7, 6];
let arr2 = [100, 25, 50, 43, 90, 63, 12, 77];
let arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(mergeSort(arr1));  // [1, 2, 3, 4, 6, 7, 9]
console.log(mergeSort(arr2));  // [12, 25, 43, 50, 63, 77, 90, 100]
console.log(mergeSort(arr3));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]