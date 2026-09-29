import pymupdf

doc = pymupdf.open('design/prototype.pdf')
page = doc[0]

print('=== HERO TEXT SPANS ===')
text_dict = page.get_text('dict')
for block in text_dict['blocks']:
    if 'lines' in block:
        for line in block['lines']:
            for span in line['spans']:
                bbox = [round(x, 1) for x in span['bbox']]
                y0 = bbox[1]
                if y0 < 1024:
                    print(f"TEXT: bbox={bbox} size={span['size']:.1f} font={span['font']} text={repr(span['text'])}")

print('\n=== HERO DRAWINGS (CARDS, BUTTONS, CIRCLE) ===')
drawings = page.get_drawings()
for i, d in enumerate(drawings):
    r = d['rect']
    if r.y0 < 1024 and (r.width > 20 and r.height > 15):
        fill = [round(c, 3) for c in d['fill']] if d.get('fill') else None
        color = [round(c, 3) for c in d['color']] if d.get('color') else None
        print(f"DRAWING #{i}: rect=({r.x0:.1f}, {r.y0:.1f}, {r.x1:.1f}, {r.y1:.1f}) w={r.width:.1f} h={r.height:.1f} fill={fill} color={color} items_count={len(d.get('items', []))}")

print('\n=== HERO IMAGES ===')
for img in page.get_images():
    xref = img[0]
    rects = page.get_image_rects(xref)
    for r in rects:
        if r.y0 < 1024:
            print(f"IMG xref={xref} name={img[7]} w_orig={img[2]} h_orig={img[3]}: rect=({r.x0:.1f}, {r.y0:.1f}, {r.x1:.1f}, {r.y1:.1f}) w={r.width:.1f} h={r.height:.1f}")
