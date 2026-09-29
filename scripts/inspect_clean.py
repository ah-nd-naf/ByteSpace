import pymupdf

doc = pymupdf.open('design/prototype.pdf')
page = doc[0]

print('=== 1. HERO TEXT ===')
for b in page.get_text('blocks'):
    if b[1] < 1024:
        print(f"rect=({b[0]:.1f}, {b[1]:.1f}, {b[2]:.1f}, {b[3]:.1f}) w={b[2]-b[0]:.1f} h={b[3]-b[1]:.1f} text={repr(b[4].strip())}")

print('\n=== 2. HERO DRAWINGS (y0 < 1024) ===')
for i, d in enumerate(page.get_drawings()):
    r = d['rect']
    if r.y0 < 1024 and (r.width > 30 and r.height > 20):
        # ignore page-wide backgrounds (w > 1400) unless relevant
        fill = [round(c, 3) for c in d['fill']] if d.get('fill') else None
        color = [round(c, 3) for c in d['color']] if d.get('color') else None
        print(f"#{i}: rect=({r.x0:.1f}, {r.y0:.1f}, {r.x1:.1f}, {r.y1:.1f}) w={r.width:.1f} h={r.height:.1f} fill={fill} color={color}")
