from PIL import Image

for name in ['page-1-home.png', 'page-4-search.png']:
    im = Image.open(f"design/screenshots/{name}")
    # crop navbar (1440 x 120)
    # let's check size of image
    w, h = im.size
    scale = w / 1440.0
    nav_crop = im.crop((0, 0, w, int(130 * scale)))
    nav_crop.save(f"design/screenshots/_nav_crop_{name}")
    print(f"Saved nav crop for {name}, size={nav_crop.size}")
