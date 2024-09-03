[n, m] = map(int, input().split())


class Bucket:
    def __init__(self, size):
        self.balls = [i for i in range(1, size + 1)]

    def swap_ball(self, i, j):
        self.balls[i], self.balls[j] = self.balls[j], self.balls[i]


bucket = Bucket(n)

for _ in range(m):
    [i, j] = map(int, input().split())
    bucket.swap_ball(i - 1, j - 1)

print(" ".join(map(str, bucket.balls)))
