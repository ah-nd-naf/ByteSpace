from PIL import Image

for xref in [12, 24, 46, 54, 58, 706]:
    fn = f"design/exact_xref_{xref}.png"
    im = Image.open(fn)
    bbox = im.getbbox()
    thumb = im.resize((150, 150))
    thumb.save(f"design/thumb_xref_{xref}.png")
    print(f"Xref {xref}: bbox={bbox}, thumb saved")
