[n, a, b] = input().split(" ")

n = int(n)
a = int(a)
b = int(b)


def next_round(number):
    if number % 2 == 0:
        return number // 2
    else:
        return (number + 1) // 2


def solution(n, a, b):
    answer = 0
    while a != b:
        a = next_round(a)
        b = next_round(b)
        answer += 1
    return answer


print(solution(n, a, b))
