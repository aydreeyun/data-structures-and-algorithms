# Sorting Algorithms
As software engineers, we most likely will never be writing our own sorting algorithms as most languages come with a sorting function. However, we need to know the difference between each sorting algorithm and when it is best to use them. 

Take a look at this [link](https://www.bigocheatsheet.com/) for more information on each sorting algorithm and their efficiencies.

## Bubble Sort
The idea behind bubble sort is that the larger elements will continuously bubble up to the end of the array until there are no more elements to bubble up anymore. This will involve swapping the larger element until the largest element reaches the end of the array.

Bubble sort is mainly used to introduce sorting algorithms for academic purposes. There is almost no situation where bubble sort is preferred to be used over any other sorting algorithm, however it is important to know how it works and how efficient it is.

![](./images/bubble_sort.gif)

* Time Complexity: O(n^2)
* Space Complexity: O(1)

```javascript
const bubbleSort = (arr) => {
  // set a conditional to check if the array is sorted
  let sorted = false;

  // while the array is not sorted
  while (!sorted) {
    // set sorted to true for our exit condition when the array is fully sorted
    sorted = true;

    // iterate through the array excluding the last element
    for (let i = 0; i < arr.length - 1; i++) {
      // check if the array at the current index is greater than the one next to it
      if (arr[i] > arr[i + 1]) {
        // swap if condition is met
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        // because we swapped, the array is not sorted
        sorted = false;
      }
    }
  }

  // once the sorting is complete, return the original array, now sorted
  return arr;
}
```


## Selection Sort
Selection sort is similar to bubble sort, but the only difference is that in selection sort, the smallest element is being placed at the beginning of the array.

Selection sort will also most likely never be used in a production setting.

![](./images/selection_sort.gif)

* Time Complexity: O(n^2)
* Space Complexity: O(1)

```javascript
const selectionSort = arr => {
  // iterate through each element of the array
  for (let i = 0; i < arr.length - 1; i++) {
    // set the initial min value to the element at the current index
    let min = arr[i];
    // set the initial index for the min value to the current index
    let minIdx = i;

    // iterate through the array excluding the current element
    for (let j = i + 1; j < arr.length; j++) {
      // if the element in the second iteration is less than the min, set the min and min index accordingly
      if (arr[j] < min) {
        min = arr[j];
        minIdx = j;
      }
    }

    // after the min element is found, swap it with the current index in the first iteration
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  // return the array once the sorting is complete
  return arr;
}
```

## Insertion Sort
Insertion Sort

![](./images/insertion_sort.gif)

* Time Complexity: O(n^2)
* Space Complexity: O(1)

```javascript
const insertionSort = arr => {
  // iterate through the array excluding the first element - the first element will be used to compare where to insert the next element
  for (let i = 1; i < arr.length; i++) {
    // pointer for the current element
    const currEle = arr[i];

    // iterate through the already sorted array in the front going backwards until we find an element less than the current element
    for (var j = i - 1; j >= 0 && currEle < arr[j]; j--) {
      // shift each element up one index to leave space for the insertion
      arr[j + 1] = arr[j];
    }

    // set the current element to the missing space
    arr[j + 1] = currEle;
  }

  // return the sorted array
  return arr;
```

## Merge Sort
The idea behind merge sort is to split the array recursively into two arrays, left and right, until each element is it's own separate array.

![](./images/merge_sort.gif)

* Time Complexity: O(nlogn)
* Space Complexity: O(n)

```javascript
// MAIN FUNCTION - SPLITS THE ARRAYS UNTIL EACH ELEMENT IS IN ITS OWN ARRAY THEN SORTS AND MERGES USING HELPER FUNCTION
const mergeSort = arr => {
  // base case
  if (arr.length === 1) return arr;

  // get the middle index
  const mid = Math.floor(arr.length / 2);
  // recursively break down the first half of the array
  const left = mergeSort(arr.slice(0, mid));
  // recursively break down the second half of the array
  const right = mergeSort(arr.slice(mid));

  // use helper function to sort and merge the left and right arrays declared above
  return merge(left, right);
}

// HELPER FUNCTION - SORTS AND MERGES THE LEFT AND RIGHT ARRAYS
const merge = (left, right) => {
  // this will contain the sorted and merged array;
  const merged = [];

  // until there are no more elements in either the left or right array
  while (left.length && right.length) {
    // compare the first element of each array then push to merged array depending on which is lesser
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  // concatenate the remaining array, either left or right
  return merged.concat(left, right);
}
```

## Quick Sort
Quick Sort is 

![](./images/quick_sort.gif)

* Time Complexity: O(nlogn)
* Space Complexity: O(logn)

```javascript
const quickSort = arr => {
  // base case
  if (arr.length <= 1) return arr;

  // select the first element of the array as the pivot element
  const pivot = arr[0];
  // the left array will only contain elements that are less than the pivot
  const left = arr.filter(ele => ele < pivot);
  // the right array will only contain elements that are greater than the pivot
  const right = arr.filter(ele => ele > pivot);

  // recursive step - keep shifting the pivot to the middle until every element is sorted
  return quickSort(left).concat([pivot], quickSort(right));
}
```
