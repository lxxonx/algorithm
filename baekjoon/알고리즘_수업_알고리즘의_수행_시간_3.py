def MenOfPassion(A, n):
    sum = 0
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            sum += A[i] * A[j]
    return sum


n = int(input())
print(n**2)
print(2)
