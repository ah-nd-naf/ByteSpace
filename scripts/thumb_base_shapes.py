from PIL import Image

shapes = [
    'shape-spring-1.png',
    'shape-spring-2.png',
    'shape-torus.png',
    'shape-pyramid.png',
    'shape-cylinder.png',
    'shape-cone.png'
]

for s in shapes:
    im = Image.open(f"src/assets/images/{s}")
    thumb = im.resize((150, 150))
    thumb.save(f"design/thumb_{s}")
    print(f"{s}: {im.size}")
