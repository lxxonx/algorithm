def calc_score(grade):
    if grade == "A+":
        return 4.5
    elif grade == "A0":
        return 4.0
    elif grade == "B+":
        return 3.5
    elif grade == "B0":
        return 3.0
    elif grade == "C+":
        return 2.5
    elif grade == "C0":
        return 2.0
    elif grade == "D+":
        return 1.5
    elif grade == "D0":
        return 1.0
    elif grade == "F":
        return 0.0


length = 20
score_sum = 0
sum = 0
for _ in range(length):
    subject, score, grade = input().split()
    if grade == "P":
        length -= 1
        continue
    score_sum += float(score)
    sum += float(score) * calc_score(grade)

print(f"{sum / score_sum:.6f}")
