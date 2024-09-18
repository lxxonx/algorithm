a, b, c, d, e, f = map(int, input().split())
first_formula = [a, b, c]
second_formula = [d, e, f]


def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


def lcm(a, b):
    return abs(a * b) // gcd(a, b)


def sol(F, S):
    if F[0] == 0:
        y = c // b
        x = (f - e * y) // d
        return x, y
    if S[0] == 0:
        y = f // e
        x = (c - b * y) // a
        return x, y

    _lcm = lcm(F[0], S[0])
    f_mul = _lcm // F[0]
    s_mul = _lcm // S[0]

    F = list(map(lambda x: x * f_mul, F))
    S = list(map(lambda x: x * s_mul, S))

    y_coef = F[1] - S[1]
    constant = F[2] - S[2]
    if y_coef != 0:
        y = constant // y_coef
        x = (c - b * y) // a
    else:
        x, y = 0, 0

    return x, y


x, y = sol(first_formula, second_formula)

print(x, y)
