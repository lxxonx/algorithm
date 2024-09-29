n = int(input())

c = dict(map(lambda k: (int(k), True), input().split()))

m = int(input())

f = list(map(int, input().split()))
for i in f:
    result = 1 if i in c else 0
    print(result, end=" ")
