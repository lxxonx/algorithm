n, r1,c1, r2,c2 = list(map(int, input().split()))

for i in range(r1, r2+1):
    res = ""
    for j in range(c1, c2 +1):
        dist = abs(i % (n * 2 -1) - n + 1) + abs(j % (n * 2 -1) - n + 1)
        if (dist >= n):
            res += "."
            continue
        res += str(chr(dist + 97))
    print(res)