def sum_of_divisors(a):
    factors = []
    for i in range(1, a):
        if a % i == 0:
            factors.append(i)
    if a == sum(factors):
        return str(a) + " = " + " + ".join(map(str, factors))
    else:
        return str(a) + " is NOT perfect."


while True:
    a = int(input())
    if a == -1:
        break
    print(sum_of_divisors(a))
