import pymupdf

doc = pymupdf.open('design/prototype.pdf')
page = doc[0]

xrefs = [12, 24, 46, 54, 58]

for xref in xrefs:
    pix = pymupdf.Pixmap(doc, xref)
    # if CMYK or other, convert to RGB
    if pix.n >= 5:
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    filename = f"design/extracted_xref_{xref}.png"
    pix.save(filename)
    print(f"Saved {filename}: {pix.width}x{pix.height}, alpha={pix.alpha}")
