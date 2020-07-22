// ITERATIVELY
const iFibonacci = num => {
  const arr = [1, 1];

  for (let i = arr.length; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[num - 1];
};

// TEST CASES
console.log(iFibonacci(3)); // 2
console.log(iFibonacci(4)); // 3
console.log(iFibonacci(5)); // 5


// RECURSIVELY
const rFibonacci = num => {
  if (num === 1) return 1;
  else if (num === 2) return 1;

  return rFibonacci(num - 2) + rFibonacci(num - 1);
};

// TEST CASES
console.log(rFibonacci(3)); // 2
console.log(rFibonacci(4)); // 3
console.log(rFibonacci(5)); // 5