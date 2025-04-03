### Question 2

There is a game that is played as follows:

- There is a pawn located at cell 0, and its score is 0.
- There is a row of `n` cells numbered from `0` to `n-1` from left to right.
- Each cell has a value, and the first cell always has a value of 0.
- In a single move, the pawn can move either:
  - one cell to the right, or
  - some number `p` cells to the right where `p` is a prime number ending in 3, e.g., 3 and 13.
- The pawn cannot move beyond the last cell.
- When the pawn enters a cell, its value is added to the score.
- The game ends after the pawn lands on the last cell at `n-1`.

Determine the maximum possible score.

#### Example

```
cell = [0, -10, -20, -30, 50]
```

There are `n = 5` cells in the array, with cells numbered from 0 to 4.

The pawn starts at cell 0 and can reach cells 1 and 3.

- The pawn can always move 1 cell right until reaching cell `n - 1`.
- 3 is a prime number with the least significant digit of 3.

There are three ways to reach cell 4:

1. Jump 3 then 1, sum=[-30, 50] → 20  
2. Jump 1 then 3, sum=[-10, 50] → 40  
3. Jump 1 always, sum=[-10, -20, -30, 50] → -10  

The best score possible is 40.

### Function Description

Complete the function `maxGameScore` in the editor below.

```python
maxGameScore has the following parameter(s):
int cell[n]: the cell values

Returns:
int: the maximum possible score
```

### Constraints

- `1 ≤ n ≤ 10^4`
- `-10^4 ≤ cell[i] ≤ 10^4`
- `cell[0] = 0`

### Test Cases

#### Test Case 4

```
Input: [0, -10, -20, -30, 50]
Expected Output: 40
```

Explanation: Optimal path is 0 → 1 → 4, with values -10 + 50 = 40 using a jump of 3.

```
Input: [0, -10, -20, -30, 50]
Expected Output: 40
```

Explanation: Optimal path is 0 → 1 → 4, with values -10 + 50 = 40 using a jump of 3.

#### Test Case 1

```
Input: [0]
Expected Output: 0
```

Explanation: Only one cell, which is the starting cell, so the score remains 0.

#### Test Case 2

```
Input: [0, -10, -20, -30, 50, -20, 10]
Expected Output: 30
```

Explanation: Optimal path is 0 → 1 → 4 → 5 → 6, with values -10 + 50 + -20 + 10 = 30 using jumps of 3 where allowed.

#### Test Case 3

```
Input: [0] + [-1]*2000
Expected Output: -682
```

Explanation: A large test case with many negative values; the algorithm must avoid accumulating a large negative score while still reaching the final cell.
