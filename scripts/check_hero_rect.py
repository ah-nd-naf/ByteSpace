import pymupdf as fitz

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]

# Find the blue background rectangle on page 1
for draw in p1.get_drawings():
    r = draw["rect"]
    if draw["fill"] and abs(draw["fill"][0] - 0.0) < 0.05 and abs(draw["fill"][1] - 0.231) < 0.05 and abs(draw["fill"][2] - 0.886) < 0.05:
        if r.width >= 1000:
            print(f"Hero blue background rect: {r} fill={draw['fill']}")

# Also check grid lines in prototype.pdf
print("\nGrid lines in y <= 300:")
for draw in p1.get_drawings():
    r = draw["rect"]
    if r.y0 < 300 and draw["color"] or draw["fill"]:
        # check if it's a 1px line
        if (r.width == 1440 and r.height <= 2) or (r.height >= 500 and r.width <= 2):
            print(f"Grid line rect: {r} fill={draw['fill']} color={draw['color']}")
