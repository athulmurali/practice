
# 📌 Code Question 1 – CPU Resource Sorting

## Problem Description

There are `n` processes. The i-th process has `resource[i]` number of resources. All the `resource[i]` are **distinct**.  
The CPU wants the processes to be arranged in increasing order of their `resource[i]`.

The CPU performs several operations to achieve this:

### Operation Definition

In each operation:

- The CPU selects an integer `x` and a process with `resource ≤ x`.
- It then places **all** such processes **before** the processes with resource values greater than `x`, maintaining the **relative order**.
  - Order between processes with `resource ≤ x` is preserved.
  - Order between processes with `resource > x` is preserved.

---

## 🎯 Objective

Find the **lexicographically smallest sequence of `x`s** that the CPU should choose such that it takes the **minimum number of operations** to complete the task.

If the minimum number of operations is `0`, return a sequence with a **single integer `-1`**.

---

## Example

```
n = 6
resource = [6, 4, 3, 5, 2, 1]
```

### Steps

1. Choose `x = 2` → [6, 4, 3, 5, **2, 1**] → [1, 6, 4, 3, 5, 2]
2. Choose `x = 3` → [1, **6, 4, 3**, 5, 2] → [1, 3, 6, 4, 5, 2]
3. Choose `x = 4` → [1, 3, **6, 4**, 5, 2] → [1, 3, 4, 6, 5, 2]
4. Choose `x = 6` → [1, 3, 4, **6, 5, 2**] → [1, 2, 3, 4, 5, 6]

### ✅ Minimum number of operations = 4  

### ✅ Answer: `[2, 3, 4, 6]`

---

## ✍️ Function Signature

```python
def getOperations(resource: List[int]) -> List[int]:
    pass
```

### Parameters

- `resource`: List[int] — An array of integers representing number of resources per process.

### Returns

- A list of integers — the lexicographically smallest sequence of x’s used in each operation.

---

## 🔒 Constraints

- `1 ≤ n ≤ 2 * 10^5`
- `1 ≤ resource[i] ≤ 10^9`
- All `resource[i]` values are **distinct**

---

## 🧪 Sample Test Case 0

### Input

```text
n = 5
resource = [15, 10, 14, 12, 13]
```

### Output

```text
14
15
```

### Explanation

```
Choose x = 14 → [15, 10, 14, 12, 13] → [10, 12, 13, 15, 14]  
Choose x = 15 → [10, 12, 13, 15, 14] → [10, 12, 13, 14, 15]
```

---

## 🧪 Sample Test Case 1

### Input

```text
n = 6
resource = [2, 4, 14, 10, 5, 3]
```

### Output

```text
4
10
14
```

### Explanation

```
Choose x = 4 → [2, 4, 14, 10, 5, 3] → [2, 3, 4, 14, 10, 5]  
Choose x = 10 → [2, 3, 4, 14, 10, 5] → [2, 3, 4, 5, 14, 10]  
Choose x = 14 → [2, 3, 4, 5, 14, 10] → [2, 3, 4, 5, 10, 14]
```

---

Let me know if you want the function implemented in Python as well!
