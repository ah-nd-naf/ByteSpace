import pymupdf as fitz

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]

il = p1.get_images()
print(f"Total embedded images on page 1: {len(il)}")

for img_info in il:
    xref = img_info[0]
    rects = p1.get_image_rects(xref)
    for r in rects:
        print(f"xref={xref} w={img_info[2]} h={img_info[3]} rect=({r.x0:.1f}, {r.y0:.1f}, {r.x1:.1f}, {r.y1:.1f})")
