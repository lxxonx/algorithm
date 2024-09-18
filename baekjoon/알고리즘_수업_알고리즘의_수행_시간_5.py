def MenOfPassion(A, n):
    sum = 0
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            for k in range(1, n + 1):
                sum += A[i] * A[j] * A[k]
    return sum


n = int(input())
print(n**3)
print(3)
