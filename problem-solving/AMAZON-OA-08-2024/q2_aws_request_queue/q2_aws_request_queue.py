from typing import List
from collections import deque

def findRequestsInQueue(wait: List[int]) -> List[int]:
    queue = deque(wait)
    result = []
    current_time = 1

    while queue:
        # Remove all expired requests: wait[i] < current_time
        while queue and queue[0] < current_time:
            queue.popleft()

        # Record the queue size after expiration
        result.append(len(queue))

        # Serve the first request (if any remain)
        if queue:
            queue.popleft()

        current_time += 1

    return result


def run_tests():
    testCases = [
        ([2, 2, 3, 1], [4, 2, 1, 0]),
        ([1, 2, 3], [3, 2, 1, 0]),
    ]

    for i, (wait, expected) in enumerate(testCases):
        result = findRequestsInQueue(wait)
        if result != expected:
            print(f"❌ Test {i+1} Failed")
            print(f"   Input:    wait = {wait}")
            print(f"   Expected: {expected}")
            print(f"   Got:      {result}")
        else:
            print(f"✅ Test {i+1} Passed")

if __name__ == '__main__':
    run_tests()
