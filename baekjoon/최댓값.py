arr = []

for el in range(9):
    i = list(map(int, input().split()))
    arr.extend(i)

print(max(arr))
print(arr.index(max(arr)) // 9 + 1, arr.index(max(arr)) % 9 + 1)
