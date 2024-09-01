[n, m] = map(int, input().split())


class Bucket:
    def __init__(self, size):
        self.balls = [0] * size

    def add_ball(self, bucket_num, ball_num):
        self.balls[bucket_num] = ball_num


bucket = Bucket(n)

for _ in range(m):
    [i, j, k] = map(int, input().split())
    for bucket_num in range(i - 1, j):
        bucket.add_ball(bucket_num, k)

print(" ".join(map(str, bucket.balls)))
