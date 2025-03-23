### Question 9

#### Problem: Binary Search
Implement a function `binarySearch(arr, target)` that returns the index of the target element in a sorted array or -1 if not found.

```js
const binarySearch = (arr, target) => {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};
```
