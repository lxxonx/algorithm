num = int(input())
x_coords = []
y_coords = []
for i in range(num):
    x, y = map(int, input().split())
    x_coords.append(x)
    y_coords.append(y)

min_x = min(x_coords)
max_x = max(x_coords)
min_y = min(y_coords)
max_y = max(y_coords)

print((max_x - min_x) * (max_y - min_y))
