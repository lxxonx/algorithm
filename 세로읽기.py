arr = [""] * 15

for _ in range(5):
    i = list(input())
    for j in range(len(i)):
        arr[j] += i[j]

print("".join(arr))
