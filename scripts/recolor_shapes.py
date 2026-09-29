import os
from PIL import Image, ImageOps

IMG_DIR = 'src/assets/images'

def make_lime(src_file, dst_file):
    src_path = os.path.join(IMG_DIR, src_file)
    dst_path = os.path.join(IMG_DIR, dst_file)
    im = Image.open(src_path).convert('RGBA')
    r, g, b, a = im.split()
    gray = im.convert('L')
    
    # Exact matching formula from shape-torus-lime (electric lime #CBFC01 with specular highlight)
    colorized = ImageOps.colorize(
        gray,
        black=(100, 140, 0),
        mid=(215, 253, 20),
        white=(245, 255, 120),
        midpoint=120
    )
    colorized.putalpha(a)
    colorized.save(dst_path, 'PNG', optimize=True)
    print(f"LIME: Saved {dst_file}")

def make_white(src_file, dst_file):
    src_path = os.path.join(IMG_DIR, src_file)
    dst_path = os.path.join(IMG_DIR, dst_file)
    im = Image.open(src_path).convert('RGBA')
    r, g, b, a = im.split()
    gray = im.convert('L')
    
    # Pure bright porcelain white with subtle cool shading matching Figma's exact median (246, 246, 248)
    colorized = ImageOps.colorize(
        gray,
        black=(160, 165, 175),
        mid=(244, 245, 249),
        white=(255, 255, 255),
        midpoint=110
    )
    colorized.putalpha(a)
    colorized.save(dst_path, 'PNG', optimize=True)
    print(f"WHITE: Saved {dst_file}")

def main():
    # 1. Update all Lime shapes to match shape-torus-lime exactly
    lime_shapes = [
        ('shape-spring-1.png', 'shape-spring-1-lime.png'),
        ('shape-spring-2.png', 'shape-spring-2-lime.png'),
        ('shape-cone.png', 'shape-cone-lime.png'),
        ('shape-cylinder.png', 'shape-cylinder-lime.png'),
    ]
    for src, dst in lime_shapes:
        make_lime(src, dst)

    # 2. Update all White shapes to match pure crisp Figma white (no muddy grey/brown)
    white_shapes = [
        ('shape-cylinder.png', 'shape-cylinder.png'),
        ('shape-cone.png', 'shape-cone.png'),
        ('shape-spring-1.png', 'shape-spring-1-white.png'),
        ('shape-spring-2.png', 'shape-spring-2-white.png'),
    ]
    for src, dst in white_shapes:
        make_white(src, dst)

if __name__ == '__main__':
    main()
