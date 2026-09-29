import pymupdf as fitz
import json

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]

print("=== CHECKING DRAWINGS & RECTS IN FEATURE ROW 2 (y: 3900 -> 4580) ===")
drawings = p1.get_drawings()
for d in drawings:
    r = d["rect"]
    if 3900 <= r.y0 <= 4580:
        if d["fill"]:
            print(f"Fill rect: {r} fill={d['fill']} w={r.width:.1f} h={r.height:.1f}")
        if d["color"]:
            print(f"Stroke rect: {r} color={d['color']} w={r.width:.1f} h={r.height:.1f}")

print("\n=== CHECKING TEXT IN FEATURE ROW 2 (y: 3900 -> 4580) ===")
d_text = p1.get_text("dict")
for b in d_text["blocks"]:
    if "lines" in b:
        for l in b["lines"]:
            for s in l["spans"]:
                if 3900 <= s["bbox"][1] <= 4580:
                    print(f"[{s['bbox'][1]:.1f}, x={s['bbox'][0]:.1f}, size={s['size']}]: '{s['text']}'")
