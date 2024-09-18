a, b, c = map(int, input().split())


def validate_triangle(a, b, c):
    if a + b <= c:
        return validate_triangle(a, b, c - 1)
    elif a + c <= b:
        return validate_triangle(a, b - 1, c)
    elif b + c <= a:
        return validate_triangle(a - 1, b, c)
    else:
        return a + b + c


print(validate_triangle(a, b, c))
