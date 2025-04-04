### Question 5

#### Problem: Implement a LRU Cache
Create a class `LRUCache` that follows the Least Recently Used caching strategy.

```js
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size == this.capacity) this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, value);
  }
};
```
