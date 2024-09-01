[n, m] = map(int, input().split())


balls = [i for i in range(1, n + 1)]

for _ in range(m):
    [i, j] = map(int, input().split())
    balls[i - 1 : j] = reversed(balls[i - 1 : j])

print(" ".join(map(str, balls)))
