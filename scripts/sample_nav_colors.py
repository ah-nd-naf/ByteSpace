from PIL import Image

for name in ['page-1-home.png', 'page-4-search.png']:
    im = Image.open(f"design/screenshots/_nav_crop_{name}")
    # sample pixel at (50, 50) and (1200, 50)
    print(name, "pixel at (50, 50):", im.getpixel((50, 50)))
    print(name, "pixel at (614, 55):", im.getpixel((614, 55)))
