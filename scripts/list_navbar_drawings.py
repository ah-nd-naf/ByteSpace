import pymupdf as fitz

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]

for draw in p1.get_drawings():
    r = draw["rect"]
    if r.y1 <= 120:
        print(f"Drawing: rect={r} fill={draw['fill']} color={draw['color']}")
