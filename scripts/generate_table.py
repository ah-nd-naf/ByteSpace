import pymupdf

doc = pymupdf.open('design/prototype.pdf')
page = doc[0]

elements = [
    ("H1 Heading (Line 1: 'Get Access to Hundreds')", 293.0, 165.0, 869.7, 91.4),
    ("H1 Heading (Line 2: 'Courses Available')", 396.0, 251.0, 648.0, 91.4),
    ("Hero Subtitle ('Unlock your creativity...')", 310.5, 376.0, 819.0, 22.9),
    ("Search Input White Pill", 429.5, 462.0, 461.0, 52.0),
    ("Search Lime Button ('Search')", 906.5, 462.0, 104.0, 46.0),
    ("Big Lime Circle (content box)", 145.0, 582.0, 1149.0, 1149.0),
    ("Big Lime Circle (outer with 320px border)", -175.0, 262.0, 1789.0, 1789.0),
    ("Central Student Image (cutoutHeroManLaptop)", 410.0, 512.9, 722.0, 685.0),
    ("UI/UX Design Floating Card", 404.0, 639.0, 208.0, 70.0),
    ("Happy Students Floating Card", 328.0, 837.0, 258.0, 121.0),
    ("Learning Progress 55% Floating Card", 842.0, 651.0, 232.0, 131.0),
    ("Top-Left 3D Shape (shape-spring-2-lime)", -121.6, 221.0, 386.8, 386.8),
    ("Mid-Left 3D Shape (shape-spring-2-white)", 183.8, 477.0, 175.8, 175.8),
    ("Bottom-Left 3D Shape (shape-torus-blue / white)", 14.4, 681.3, 343.7, 343.7),
    ("Top-Right 3D Shape (shape-cylinder-lime)", 1227.1, 220.2, 371.8, 371.8),
    ("Mid-Right 3D Shape (shape-pyramid-white)", 1104.0, 463.6, 188.9, 188.9),
    ("Bottom-Right 3D Shape (shape-spring-1-blue)", 1123.9, 672.0, 331.5, 331.5),
]

print("| Element | X (left) | Y (top) | Width | Height |")
print("| :--- | :--- | :--- | :--- | :--- |")
for name, x, y, w, h in elements:
    print(f"| {name} | {x}px | {y}px | {w}px | {h}px |")
