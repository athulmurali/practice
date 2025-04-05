from typing import List

def findRequestsInQueue(wait: List[int]) -> int:
    """
    Returns the number of requests successfully served from the queue.

    Parameters:
    wait (List[int]): An array where wait[i] is the max wait time for request i.

    Returns:
    int: Total number of requests served before the queue is empty.
    """
    # TODO: Implement your solution here
    pass

# Sample test cases
testCases = [
    { "n": 4, "wait": [2, 2, 3, 1], "expected": 3 },
    { "n": 6, "wait": [1, 2, 3, 4, 5, 6], "expected": 6 },
    { "n": 5, "wait": [1, 1, 1, 1, 1], "expected": 1 },
    { "n": 3, "wait": [0, 0, 0], "expected": 0 },
    { "n": 5, "wait": [5, 4, 3, 2, 1], "expected": 3 },
]

# Run test cases
for case in testCases:
    n = case["n"]
    wait = case["wait"]
    expected = case["expected"]
    result = findRequestsInQueue(wait)
    assert result == expected, f"Failed for wait={wait} | Expected: {expected}, Got: {result}"
    print(f"Passed for wait={wait} ✅")

print("All test cases passed!")
