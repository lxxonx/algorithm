import sys


def input():
    return sys.stdin.readline()


n = int(input())

max_num = 10_000
arr = [0] * max_num

for _ in range(n):
    x = int(input())
    arr[x - 1] += 1

for i, v in enumerate(arr):
    if v == 0:
        continue
    for _ in range(v):
        print(i + 1)
