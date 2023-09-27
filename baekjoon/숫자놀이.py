[start, end] = input().split(" ")

start = int(start)
end = int(end)

str_num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

arr = [i for i in range(start, end+1)]

alter = []


for i in range(start, end+1):
    str_n = [*str(i)]
    for j in range(len(str_n)):
        n = int(str_n[j])
        str_n[j] = str_num[n]
    
    alter.append(" ".join(str_n))

alter.sort()

for i in range(len(alter)):
    a = alter[i].split(" ")
    n = ""
    for j in range(len(a)):
        n += str(str_num.index(a[j]))
    print(n, end=" ")
    if (i+1) % 10 == 0:
        print()