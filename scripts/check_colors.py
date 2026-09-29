from PIL import Image

for xref in [12, 24, 46, 54, 58, 706]:
    im = Image.open(f"design/thumb_xref_{xref}.png")
    # Sample non-transparent pixel color
    colors = []
    for x in range(0, 150, 5):
        for y in range(0, 150, 5):
            r, g, b, a = im.getpixel((x, y))
            if a > 200:
                colors.append((r, g, b))
    if colors:
        avg_r = sum(c[0] for c in colors) // len(colors)
        avg_g = sum(c[1] for c in colors) // len(colors)
        avg_b = sum(c[2] for c in colors) // len(colors)
        print(f"Xref {xref}: avg RGB=({avg_r}, {avg_g}, {avg_b}) count={len(colors)}")
