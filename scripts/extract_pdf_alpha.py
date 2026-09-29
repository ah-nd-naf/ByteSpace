import pymupdf

doc = pymupdf.open('design/prototype.pdf')
page = doc[0]

for img in page.get_images():
    xref = img[0]
    smask = img[1]
    if xref in [12, 24, 46, 54, 58, 210, 682, 706, 710, 720]:
        print(f"Xref {xref}: smask={smask}, name={img[7]}")
        pix = pymupdf.Pixmap(doc, xref)
        if smask > 0:
            mask = pymupdf.Pixmap(doc, smask)
            pix = pymupdf.Pixmap(pix, mask)
        filename = f"design/exact_xref_{xref}.png"
        pix.save(filename)
        print(f"  Saved {filename}")
