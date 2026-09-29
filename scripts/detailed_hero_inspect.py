import pymupdf

doc = pymupdf.open('design/prototype.pdf')
page = doc[0]

print("=== 1. TEXT ELEMENTS IN HERO (y <= 1024) ===")
for b in page.get_text('dict')['blocks']:
    if 'lines' in b and b['bbox'][1] < 1024:
        for line in b['lines']:
            text = "".join(span['text'] for span in line['spans'])
            bbox = [round(x, 1) for x in line['bbox']]
            print(f"Line: {bbox} (w={bbox[2]-bbox[0]:.1f}, h={bbox[3]-bbox[1]:.1f}) -> {repr(text)}")

print("\n=== 2. VECTOR DRAWINGS IN HERO (rect.y0 < 1024) ===")
drawings = page.get_drawings()
for i, d in enumerate(drawings):
    r = d['rect']
    if r.y0 < 1024 and r.y1 <= 1040 and r.width > 10 and r.height > 10:
        fill = [round(c, 3) for c in d['fill']] if d.get('fill') else None
        color = [round(c, 3) for c in d['color']] if d.get('color') else None
        print(f"D#{i:02d}: rect=({r.x0:6.1f}, {r.y0:6.1f}, {r.x1:6.1f}, {r.y1:6.1f}) w={r.width:6.1f} h={r.height:6.1f} fill={fill} color={color}")

print("\n=== 3. IMAGES IN HERO (rect.y0 < 1024) ===")
for img in page.get_images():
    xref = img[0]
    rects = page.get_image_rects(xref)
    for r in rects:
        if r.y0 < 1024 and r.y0 >= -100:
            print(f"IMG xref={xref} orig_size=({img[2]}x{img[3]}): rect=({r.x0:6.1f}, {r.y0:6.1f}, {r.x1:6.1f}, {r.y1:6.1f}) w={r.width:6.1f} h={r.height:6.1f}")
