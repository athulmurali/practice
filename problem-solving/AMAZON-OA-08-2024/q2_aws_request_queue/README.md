Absolutely! Here's the **Markdown version** of **Code Question 2**, including a placeholder for the visual chart. If you'd like, I can also recreate the chart as ASCII or embed a markdown image link if you upload the chart separately.

---

# 📌 Code Question 2 – AWS Request Queue Timeout

## Problem Description

Amazon Web Services (AWS) is a cloud computing platform with multiple servers. One of the servers is assigned to serve customer requests.

There is a **queue** of customer requests placed **sequentially**.  
Each request `i` has a **maximum waiting time** `wait[i]` (in seconds).

### Request Processing Rule:

- If the `i-th` request is **not** served within `wait[i]` seconds, it **expires** and is **removed** from the queue.
- The server processes requests **one at a time** in **FIFO order** (First-In-First-Out).
- The server takes **1 second** to serve each request.
- At each second:
  - If the request at the **front** is still valid (`wait[i] > time`), it is served.
  - Otherwise, it is discarded.

---

## 📝 Notes

- If a request is **served at time `t`**, it is **counted** and removed at the **next instant**.
- The **first** request is processed at **time = 0**.
- A request **expires** without being served if `time ≥ wait[i]`.
- All requests **start at time 0**.

---

## 🎯 Objective

Given an array `wait[]` of size `n`, return the **number of requests** served before the queue becomes empty.

---

## 🧪 Example

### Input

```text
n = 4  
wait = [2, 2, 3, 1]
```

### Steps

| Time | Queue         | Action                        | Served |
|------|---------------|-------------------------------|--------|
| 0    | [2, 2, 3, 1]  | Serve 1st request (wait=2)     | Yes    |
| 1    | [2, 3, 1]     | Serve 2nd request (wait=2)     | Yes    |
| 2    | [3, 1]        | Serve 3rd request (wait=3)     | Yes    |
| 3    | [1]           | **Too late** (wait=1), skip    | No     |

### ✅ Output

```text
3
```

---

## ✍️ Function Signature

```python
def findRequestsInQueue(wait: List[int]) -> int:
    pass
```

### Parameters

- `wait`: List[int] — An array of integers where `wait[i]` is the maximum time the i-th request can wait.

### Returns

- Integer — the number of requests that are successfully served.

---

## 📊 Visual Representation (From the Original Prompt)

You can recreate the visual like this:

```
Initial Queue: [2, 2, 3, 1]

Time 0: Serve wait=2 ✅ → Queue: [2, 3, 1]
Time 1: Serve wait=2 ✅ → Queue: [3, 1]
Time 2: Serve wait=3 ✅ → Queue: [1]
Time 3: wait=1 expired ❌ → Queue: []
```

Alternatively, you can use a screenshot from the image for full visual fidelity if you're rendering markdown in a system that supports it (e.g., GitHub):

```markdown
![AWS Queue Chart](./aws_queue_chart.png)
```

Let me know if you’d like an ASCII-style diagram or if you’d like me to regenerate the chart graphically!