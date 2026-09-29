import pymupdf as fitz

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]

print("=== CHECKING ALL DRAWINGS AND CLIPS AROUND NAVBAR (y <= 120) ===")
drawings = p1.get_drawings()
for i, draw in enumerate(drawings):
    r = draw["rect"]
    if r.y1 <= 120 and r.y0 >= 20:
        print(f"[{i}] rect=({r.x0:.1f}, {r.y0:.1f}, {r.x1:.1f}, {r.y1:.1f}) w={r.width:.1f} h={r.height:.1f} fill={draw['fill']} color={draw['color']} items_count={len(draw['items'])}")
        # Check items in drawing
        for it in draw["items"]:
            print("   item:", it[0], [round(x, 1) if isinstance(x, (int, float)) else str(x) for x in it[1:]])
