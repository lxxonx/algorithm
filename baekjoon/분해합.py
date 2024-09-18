a = input()
# first_digit - 1 + 9 * (len(a) - 1)
first_digit = int(a[0])
sub_max = first_digit - 1 + 9 * (len(a) - 1)
min_num = int(a) - sub_max


def sumfn(x: int):
    num_arr = map(int, list(str(x)))
    return sum(num_arr) + x


_sum = 0
for num in range(min_num, int(a)):
    if sumfn(num) == int(a):
        _sum = num
        break

print(_sum)
