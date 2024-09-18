def MenOfPassion(A, n):
    sum = 0
    for i in range(1, n - 2):
        for j in range(i + 1, n - 1):
            for k in range(j + 1, n):
                sum += A[i] * A[j] * A[k]
    return sum


n = int(input())
print(n * (n - 1) * (n - 2) // 6)
print(3)
