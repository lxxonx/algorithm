num = bin(int(input()))[2:][::-1]

sum = 0

for i in range(len(num)):
    if num[i] == "1":
        sum += 3**i

print(sum)