n = int(input())
l = []
for _ in range(n):
    x, y = map(int, input().split())
    l.append((x, y))

l.sort(key=lambda c: (c[1], c[0]))
for x in l:
    print(x[0], x[1])
