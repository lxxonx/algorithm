a, b = map(int, input().split())

last_num = int(a ** (1 / 2))
factors = []

for i in range(1, last_num + 1):
    if a % i == 0:
        factors.append(i)
        factors.append(a // i)

sorted_factors = sorted(list(set(factors)))
if b > len(sorted_factors):
    print(0)
else:
    print(sorted_factors[b - 1])
