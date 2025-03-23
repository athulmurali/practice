### Question 8

#### Problem: Sorting Algorithm
Implement a sorting algorithm (e.g., QuickSort, MergeSort) in JavaScript.

```js
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter(x => x < pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
};
```
