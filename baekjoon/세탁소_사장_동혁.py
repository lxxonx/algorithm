t = int(input())


def calc(num: int):
    coins = [25, 10, 5, 1]
    result = []
    for coin in coins:
        c = num // coin
        num = num % coin
        result.append(str(c))

    return " ".join(result)


for _ in range(t):

    a = int(input())
    result = calc(a)
    print(result)
