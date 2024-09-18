l = []
for _ in range(5):
    x = int(input())
    l.append(x)

l.sort()
avg = sum(l) // 5
print(avg)
print(l[2])
