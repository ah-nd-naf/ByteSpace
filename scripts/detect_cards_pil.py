from PIL import Image

im = Image.open('design/screenshots/hero_crop_1440x1024.png').convert('RGB')
width, height = im.size

# Let's inspect white pixels (> 250, 250, 250) in y in [550, 1024]
# Find horizontal runs or bounding boxes
pixels = im.load()

# Let's scan bounding boxes of white cards
# Specifically around left side (x between 50 and 600) and right side (x between 800 and 1400)
# Let's test specific sample points or find connected regions using a simple BFS

visited = set()
regions = []

for y in range(500, height):
    for x in range(0, width):
        if (x, y) not in visited:
            r, g, b = pixels[x, y]
            if r > 250 and g > 250 and b > 250:
                # BFS
                queue = [(x, y)]
                visited.add((x, y))
                min_x, max_x = x, x
                min_y, max_y = y, y
                count = 0
                while queue:
                    cx, cy = queue.pop()
                    count += 1
                    if cx < min_x: min_x = cx
                    if cx > max_x: max_x = cx
                    if cy < min_y: min_y = cy
                    if cy > max_y: max_y = cy
                    for nx, ny in ((cx+1, cy), (cx-1, cy), (cx, cy+1), (cx, cy-1)):
                        if 0 <= nx < width and 500 <= ny < height and (nx, ny) not in visited:
                            nr, ng, nb = pixels[nx, ny]
                            if nr > 250 and ng > 250 and nb > 250:
                                visited.add((nx, ny))
                                queue.append((nx, ny))
                if max_x - min_x > 50 and max_y - min_y > 30:
                    regions.append((min_x, min_y, max_x, max_y, max_x - min_x + 1, max_y - min_y + 1, count))

for r in sorted(regions, key=lambda x: x[1]):
    print(f"White Box: left={r[0]}, top={r[1]}, right={r[2]}, bottom={r[3]}, width={r[4]}, height={r[5]}, count={r[6]}")
