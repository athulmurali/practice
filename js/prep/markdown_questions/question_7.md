### Question 7

#### Problem: Debounce Function
Write a debounce function `debounce(func, delay)` that postpones the execution of `func` until after `delay` milliseconds have passed since the last time it was invoked.

```js
const debounce = (func, delay) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  }
};
```
