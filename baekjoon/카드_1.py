length = int(input())

arr = [i + 1 for i in range(length)]

res = ""
while len(arr) > 1:
    a = arr.pop(0)
    res += str(a) + " "
    arr.append(arr.pop(0))

res += str(arr[0])
print(res)
