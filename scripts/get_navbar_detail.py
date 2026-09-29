import pymupdf as fitz
import json

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]

print("=== NAVBAR DETAILS (y < 120) ===")
d = p1.get_text("dict")
for block in d["blocks"]:
    if "lines" in block:
        for line in block["lines"]:
            for span in line["spans"]:
                if span["bbox"][1] < 120:
                    print(f"TEXT: '{span['text']}' bbox={span['bbox']} size={span['size']} font={span['font']} color={hex(span['color'])}")

drawings = p1.get_drawings()
for draw in drawings:
    rect = draw["rect"]
    if rect.y1 <= 120 and rect.y1 > 0:
        print(f"DRAW: type={draw['type']} rect={[round(x, 2) for x in [rect.x0, rect.y0, rect.x1, rect.y1]]} fill={draw['fill']} color={draw['color']} w={round(rect.width, 2)} h={round(rect.height, 2)}")
