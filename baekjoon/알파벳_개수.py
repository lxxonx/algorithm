a = [*input()]

arr = [ 0 for _ in range(26) ]

for i in a:
    arr[ord(i) - ord("a")] += 1

print(" ".join(map(str, arr)))
