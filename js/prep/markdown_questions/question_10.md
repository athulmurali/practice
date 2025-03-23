### Question 10

#### Problem: Rotate Array
Write a function `rotateArray(arr, k)` that rotates an array to the right by `k` steps.

```js
const rotateArray = (arr, k) => {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
};
```
