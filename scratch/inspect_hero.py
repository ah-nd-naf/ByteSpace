import fitz
import glob
from PIL import Image

pdf_files = glob.glob('**/*.pdf', recursive=True)
doc = fitz.open(pdf_files[0])
page = doc[0]

print('=== HERO TEXT SPANS ===')
d = page.get_text('dict')
for b in d['blocks']:
    if 'lines' in b:
        for l in b['lines']:
            for s in l['spans']:
                if s['bbox'][3] <= 1024:
                    print(f"{s['bbox']}: '{s['text']}' font={s['font']} size={s['size']:.1f} color={hex(s['color'])}")

print('\n=== HERO DRAWINGS (CARDS) ===')
drawings = page.get_drawings()
for i, dr in enumerate(drawings):
    r = dr['rect']
    if r.y1 <= 1024 and (dr.get('fill') or dr.get('color')):
        if r.width > 100 and r.height > 40 and r.y0 > 500:
            print(f"{i}: rect={r} fill={dr.get('fill')} color={dr.get('color')}")

print('\n=== HERO IMAGES ===')
for img in page.get_images():
    xref = img[0]
    rects = page.get_image_rects(xref)
    for r in rects:
        if r.y1 <= 1024 and r.y0 > 450:
            print(f"Image xref={xref} size=({img[2]}, {img[3]}) rect={r}")
