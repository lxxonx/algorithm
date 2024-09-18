x_coords = []
y_coords = []

for i in range(3):
    x, y = map(int, input().split())
    if x not in x_coords:
        x_coords.append(x)
    else:
        x_coords.remove(x)
    if y not in y_coords:
        y_coords.append(y)
    else:
        y_coords.remove(y)


print(x_coords[0], y_coords[0])
