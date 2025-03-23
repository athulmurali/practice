### Question 2

#### Problem: Flatten a Nested Object
Write a function `flattenObject(obj)` that takes a nested object and flattens it, using dot notation for nested keys.

```js
const flattenObject = (obj, prefix = '') => {
  let result = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenObject(value, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
};
```
