### Question 6

#### Problem: Throttle Function
Write a throttle function `throttle(func, delay)` that only allows `func` to be executed once every `delay` milliseconds.

```js
const throttle = (func, delay) => {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  }
};
```
