num = input()

length = len(num)
if length == 1:
    print(int(num))
    exit()

unit = 10 ** (length - 1)

first_num = int(num) // unit

sum = (first_num - 1) * unit * length

sum += (int(num) % unit + 1) * length

for i in range(length - 1):
    sum += 9 * (10**i) * (i + 1)

print(sum)
