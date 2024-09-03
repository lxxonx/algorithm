import math
import sys
input = sys.stdin.readline

n = int(input())

times = list(map(int, input().split()))

y = 0
m = 0

for i in range(n):
    y += math.ceil(times[i] / 29) * 10
    m += math.ceil(times[i] / 59) * 15

if y < m:
    print("Y", y)
elif y > m:
    print("M", m)
else:
    print("Y M", y)