a1, a0 = map(int, input().split())
c = int(input())
n0 = int(input())

f = lambda n: a1 * n + a0
g = lambda n: n

if f(n0) <= g(n0) * c and a1 <= c:
    print(1)
else:
    print(0)
