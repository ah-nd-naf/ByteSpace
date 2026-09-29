import pymupdf

doc = pymupdf.open('design/prototype.pdf')
page = doc[0]

for img in page.get_images():
    xref = img[0]
    rects = page.get_image_rects(xref)
    for r in rects:
        if 400 < r.x0 < 450 and 500 < r.y0 < 550 and r.width > 500:
            pix = pymupdf.Pixmap(doc, xref)
            print(f"XREF {xref}: orig {pix.width}x{pix.height}, colorspace={pix.colorspace.name}, rect=({r.x0:.1f}, {r.y0:.1f}, {r.x1:.1f}, {r.y1:.1f}) w={r.width:.1f} h={r.height:.1f}")
