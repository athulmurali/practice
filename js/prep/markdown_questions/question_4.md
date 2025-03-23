### Question 4

#### Problem: Promise All with Concurrency Limit
Implement a function `promiseAllLimited(promises, limit)` that runs a list of promises in parallel but only allows `limit` number of them to run at a time.

```js
const promiseAllLimited = (promises, limit) => {
  let index = 0;
  const results = [];
  const executing = [];

  const enqueue = () => {
    if (index === promises.length) return Promise.resolve();
    const i = index++;
    const promise = promises[i]();
    const p = promise.then(result => {
      results[i] = result;
    });
    executing.push(p);
    p.finally(() => {
      executing.splice(executing.indexOf(p), 1);
      enqueue();
    });
  }

  for (let i = 0; i < limit; i++) enqueue();
  return Promise.all(executing).then(() => results);
};
```
