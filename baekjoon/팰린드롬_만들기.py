input_str = input()


def count_char(input_str):
    res = {}

    for i in input_str:
        if i in res:
            res[i] += 1
        else:
            res[i] = 1

    return res


def get_palindrome(input_dict: dict):
    res = []

    for i in input_dict:
        if input_dict[i] % 2 == 1:
            # repeat i for input_dict[i] - 1 // 2 times
            # then append i to res
            times = (input_dict[i] - 1) // 2
            for _ in range(times):
                res.append(i)
            input_dict[i] = 1

        else:
            # repeat i for input_dict[i] // 2 times
            times = input_dict[i] // 2
            for _ in range(times):
                res.append(i)
            input_dict[i] = 0

    res.sort()

    pre = "".join(res)
    after = pre[::-1]

    mid = [i for i in input_dict if input_dict[i] == 1]

    if len(mid) > 1:
        return None
    elif len(mid) == 0:
        return pre + after
    else:
        return pre + mid[0] + after


d = count_char(input_str)

res = get_palindrome(d)

if res is None:
    print("I'm Sorry Hansoo")
else:
    print(res)
