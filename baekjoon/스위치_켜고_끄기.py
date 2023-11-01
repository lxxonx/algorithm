_ = int(input())

switches = list(map(int, input().split(" ")))

switch = [False if i == 0 else True for i in switches]

length = int(input())

for _ in range(length):
    [gen, num] = map(int, input().split(" "))

    if gen == 1:
        for i in range(num - 1, len(switch), num):
            switch[i] = not switch[i]
    else:
        switch[num - 1] = not switch[num - 1]
        for i in range(1, len(switch)):
            if num - 1 - i < 0 or num - 1 + i >= len(switch):
                break
            if switch[num - 1 - i] == switch[num - 1 + i]:
                switch[num - 1 - i] = not switch[num - 1 - i]
                switch[num - 1 + i] = not switch[num - 1 + i]
            else:
                break


for i in range(0, len(switch), 20):
    print(" ".join(map(lambda x: "1" if x else "0", switch[i : i + 20])))
