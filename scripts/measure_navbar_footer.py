import pymupdf as fitz
import json

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]

print("=== NAVBAR MEASUREMENTS (y between 0 and 150) ===")
d = p1.get_text("dict")
nav_spans = []
for block in d["blocks"]:
    if "lines" in block:
        for line in block["lines"]:
            for span in line["spans"]:
                bbox = span["bbox"]
                if bbox[1] < 150:
                    nav_spans.append({
                        "text": span["text"],
                        "bbox": [round(x, 2) for x in bbox],
                        "size": round(span["size"], 2),
                        "font": span["font"],
                        "color": hex(span["color"])
                    })

print(f"Nav text spans ({len(nav_spans)}):")
for s in nav_spans:
    print(s)

# Vector drawings in navbar
drawings = p1.get_drawings()
nav_drawings = []
for draw in drawings:
    rect = draw["rect"]
    if rect.y1 <= 150 and rect.y1 > 0:
        nav_drawings.append({
            "type": draw["type"],
            "rect": [round(x, 2) for x in [rect.x0, rect.y0, rect.x1, rect.y1]],
            "fill": [round(c, 3) for c in draw["fill"]] if draw["fill"] else None,
            "color": [round(c, 3) for c in draw["color"]] if draw["color"] else None,
            "width": round(rect.width, 2),
            "height": round(rect.height, 2),
        })

print(f"\nNav drawings ({len(nav_drawings)}):")
for dr in nav_drawings[:20]:
    print(dr)

print("\n=== FOOTER MEASUREMENTS (bottom of page 1, height=6377) ===")
# Find footer text spans (y > 5500)
footer_spans = []
min_footer_y = 6377
for block in d["blocks"]:
    if "lines" in block:
        for line in block["lines"]:
            for span in line["spans"]:
                bbox = span["bbox"]
                if bbox[1] > 5500:
                    min_footer_y = min(min_footer_y, bbox[1])
                    footer_spans.append({
                        "text": span["text"],
                        "bbox": [round(x, 2) for x in bbox],
                        "size": round(span["size"], 2),
                        "font": span["font"],
                        "color": hex(span["color"])
                    })

print(f"Min footer text y: {round(min_footer_y, 2)}")
print(f"Footer text spans count: {len(footer_spans)}")
for s in footer_spans:
    print(s)

# Footer drawings
footer_drawings = []
for draw in drawings:
    rect = draw["rect"]
    if rect.y0 >= 5500:
        footer_drawings.append({
            "type": draw["type"],
            "rect": [round(x, 2) for x in [rect.x0, rect.y0, rect.x1, rect.y1]],
            "fill": [round(c, 3) for c in draw["fill"]] if draw["fill"] else None,
            "color": [round(c, 3) for c in draw["color"]] if draw["color"] else None,
            "width": round(rect.width, 2),
            "height": round(rect.height, 2),
        })

print(f"\nFooter drawings count: {len(footer_drawings)}:")
for dr in footer_drawings:
    print(dr)
