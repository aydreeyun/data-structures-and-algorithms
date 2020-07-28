const binarySearch = (arr, target) => {
  if (!arr.length) return null;

  const mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr.slice(0, mid), target);
  } else {
    const foundIdx = binarySearch(arr.slice(mid + 1), target);
    return foundIdx !== null ? mid + foundIdx + 1 : null;
  }
};

// TEST CASES
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 3));  // 2
console.log(binarySearch(arr, 7));  // 6
console.log(binarySearch(arr, 15)); // null