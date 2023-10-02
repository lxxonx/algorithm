num = input()

sum = 0

for i in range(len(num)):
    n = int(num[i])
    if n > 4:
        n -= 1
    l = len(num) - i

    unit = 9 ** (l - 1)
    sum += n * unit


print(sum)
