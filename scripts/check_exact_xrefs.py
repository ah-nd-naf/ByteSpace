from PIL import Image

for xref in [12, 24, 46, 54, 58, 706]:
    fn = f"design/exact_xref_{xref}.png"
    im = Image.open(fn)
    print(f"Xref {xref}: {im.size}, mode={im.mode}")
