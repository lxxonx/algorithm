n = int(input())
arr = list(map(int, input().split()))

arr_set = sorted(set(arr))

index_map = {value: index for index, value in enumerate(arr_set)}

for i in arr:
    print(index_map[i], end=" ")
