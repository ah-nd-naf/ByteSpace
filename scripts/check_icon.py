import pymupdf as fitz

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]

for draw in p1.get_drawings():
    r = draw["rect"]
    if 1290 <= r.x0 <= 1325 and 40 <= r.y0 <= 80:
        print("Cart/Icon drawing:", r, draw["items"])
