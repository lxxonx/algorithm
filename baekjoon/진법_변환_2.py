num, base = list(map(int, input().split()))
num_str = ""
while num != 0:
    unit = num % base
    num = num // base
    if unit > 9:
        unit = chr(unit + 55)

    num_str = str(unit) + num_str

print(num_str)
