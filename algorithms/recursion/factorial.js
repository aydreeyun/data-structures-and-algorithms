// ITERATIVELY
const iFactorial = num => {
  let product = 1;

  while (num > 0) {
    product *= num;
    num--;
  }

  return product;
};

// TEST CASES
console.log(iFactorial(3)); // 6
console.log(iFactorial(4)); // 24
console.log(iFactorial(5)); // 120


// RECURSIVELY
const rFactorial = num => {
  // base case
  if (num === 1) return num;

  // recursive step
  return num * rFactorial(num - 1);
};

// TEST CASES
console.log(rFactorial(3)); // 6
console.log(rFactorial(4)); // 24
console.log(rFactorial(5)); // 120