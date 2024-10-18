// Function to perform merge sort on an array
function mergeSort(arr) {
  // Base case: if the array has 1 or 0 elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array
  const middleIndex = Math.floor(arr.length / 2);

  // Split the array into two halves
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  // Recursively sort both halves and merge them
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// Function to merge two sorted arrays into one sorted array
function merge(leftArr, rightArr) {
  let sortedArr = [];

  // Compare the first elements of both arrays and push the smaller one into the sorted array
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  // Concatenate any remaining elements from the left and right arrays
  return sortedArr.concat(leftArr.slice()).concat(rightArr.slice());
}

// Test the mergeSort function with an example array
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
