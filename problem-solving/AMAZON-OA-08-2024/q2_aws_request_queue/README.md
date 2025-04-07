## 2. Code Question 2

Amazon Web Services (AWS) is a cloud computing platform with multiple servers. One of the servers is assigned to serve customer requests. There are n customer requests placed sequentially in a queue, where the iᵗʰ request has a maximum waiting time (denoted by wait[i]). That is, if the iᵗʰ request is not served within wait[i] seconds, then the request expires and it is removed from the queue.

The server processes the requests following the First In First Out (FIFO) principle. The iᵗʰ request is placed in position i and the jᵗʰ request is served last. At each second, the first request in the queue is processed. At the next second, the processed request and any expired requests are removed from the queue.

Given the maximum waiting time of each request denoted by the array wait, find the number of requests present in the queue at every second until it is empty.

### Note:

- If a request is served at some time instant, it will be counted for that instant and is removed at the next instant.
- The first request is processed at time = 0. A request expires without being processed when time ≥ wait[i]. It must be processed while time < wait[i]. See the example below for clarity.
- The initial queue represents all requests at time 0 in the order they must be processed.

---

### Example:

The number of requests is n = 4 and their maximum wait times are wait = [2, 2, 3, 1].

- time = 0 seconds, the 1st request is served. The number of requests in the queue is 4. queue = [2, 2, 3, 1]
- time = 1 second, request 1 is removed because it is processed, request 2 is served. request 4 is removed because time = 1 and wait[3] = 1, which means it has already expired. The number of requests in the queue is 2. queue = [2, 3]
- time = 2 seconds, request 2 is removed because it is processed, request 3 is served. The number of requests in the queue is 1. queue = [3]
- time = 3 seconds, request 3 is removed because it is processed. The number of requests in the queue is 0. queue = []

The answer is [4, 2, 1, 0]

---

### Function Description

Complete the function findRequestsInQueue in the editor below.

findRequestsInQueue has the following parameter(s):

- int wait[n]: the maximum waiting time of each request

Returns

- int[]: the number of requests in the queue at each instant until the queue becomes empty.

---

### Constraints

- 1 ≤ n ≤ 10⁵  
- 1 ≤ wait[i] ≤ 10⁹

---

### Input Format For Custom Testing

#### Sample Case 0

**Sample Input for Custom Testing**

```
STDIN           FUNCTION
-----           --------
4               → wait[] size n = 4
2               → wait = [2, 2, 3, 1]
2
3
1
```

**Sample Output**

```
4
2
1
0
```

---

#### Sample Case 1

**Sample Input for Custom Testing**

```
STDIN           FUNCTION
-----           --------
5               → wait[] size n = 5
2               → wait = [2, 4, 1, 3, 1]
4
1
3
1
```

**Sample Output**

```
5
3
2
1
0
```

**Explanation**

- time = 0 seconds, request 1 is served. queue = [2, 4, 1, 3, 1], count = 5  
- time = 1 second, request 1 is removed (served), request 2 is served, requests 3 and 5 are removed (expired). queue = [4, 3], count = 3  
- time = 2 seconds, request 2 is removed, request 4 is served. queue = [3], count = 2  
- time = 3 seconds, request 4 is removed (served). queue = [], count = 0  
