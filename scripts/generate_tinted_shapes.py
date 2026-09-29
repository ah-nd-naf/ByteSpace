import os
from PIL import Image

def colorize(im_path, tint_fn):
    im = Image.open(im_path).convert('RGBA')
    out = Image.new('RGBA', im.size)
    pixels = im.load()
    out_pixels = out.load()
    w, h = im.size
    for x in range(w):
        for y in range(h):
            r, g, b, a = pixels[x, y]
            if a == 0:
                out_pixels[x, y] = (0, 0, 0, 0)
            else:
                l = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0
                nr, ng, nb = tint_fn(l)
                out_pixels[x, y] = (nr, ng, nb, a)
    return out

def tint_lime(l):
    # Vibrant electric lime (#D4FB20 / #D7FB21) with natural specular highlights
    if l > 0.72:
        t = (l - 0.72) / 0.28
        r = int(212 + t * (255 - 212))
        g = int(251 + t * (255 - 251))
        b = int(32 + t * (220 - 32))
    else:
        t = l / 0.72
        r = int(t * 212)
        g = int(t * 251)
        b = int(t * 32)
    return r, g, b

def tint_blue(l):
    # Rich electric royal blue (#003BE2) with soft specular gloss
    if l > 0.68:
        t = (l - 0.68) / 0.32
        r = int(t * 180)
        g = int(59 + t * (210 - 59))
        b = int(226 + t * (255 - 226))
    else:
        t = l / 0.68
        r = int(t * 0)
        g = int(t * 59)
        b = int(t * 226)
    return r, g, b

def tint_white(l):
    # Crisp white / silver (#F5F5F6) with subtle cool rim tone
    r = int(min(255, l * 255 * 1.15))
    g = int(min(255, l * 255 * 1.15))
    b = int(min(255, l * 255 * 1.20))
    return r, g, b

def main():
    img_dir = 'src/assets/images'
    
    tasks = [
        # (source_shape, tint_fn, output_name)
        ('shape-cylinder.png', tint_lime, 'shape-cylinder-lime.png'),
        ('shape-spring-2.png', tint_lime, 'shape-spring-2-lime.png'),
        ('shape-cone.png', tint_lime, 'shape-cone-lime.png'),
        ('shape-torus.png', tint_blue, 'shape-torus-blue.png'),
        ('shape-spring-1.png', tint_blue, 'shape-spring-1-blue.png'),
        ('shape-pyramid.png', tint_white, 'shape-pyramid-white.png'),
        ('shape-spring-2.png', tint_white, 'shape-spring-2-white.png'),
    ]
    
    for src_name, fn, dst_name in tasks:
        src_path = os.path.join(img_dir, src_name)
        dst_path = os.path.join(img_dir, dst_name)
        print(f"Colorizing {src_name} -> {dst_name}...")
        tinted = colorize(src_path, fn)
        tinted.save(dst_path, 'PNG', optimize=True)
        print(f"Saved: {dst_name} ({tinted.size[0]}x{tinted.size[1]})")

if __name__ == '__main__':
    main()
