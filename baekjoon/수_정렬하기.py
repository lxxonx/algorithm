n = int(input())
l = []
for _ in range(n):
    x = int(input())
    l.append(x)

l.sort()

for x in l:
    print(x)
