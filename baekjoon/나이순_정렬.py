import sys


def input():
    return sys.stdin.readline()


n = int(input())


age_group = [None] * 200


for _ in range(n):
    age, name = input().split()
    age = int(age)
    if age_group[age - 1] is None:
        age_group[age - 1] = []
    age_group[age - 1].append(name)

for age, x in enumerate(age_group):
    if x is not None:
        for n in x:
            print(age + 1, n)
