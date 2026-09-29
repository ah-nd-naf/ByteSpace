import pymupdf as fitz

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]

for draw in p1.get_drawings():
    r = draw["rect"]
    if 1290 <= r.x0 <= 1325 and 40 <= r.y0 <= 80:
        # r is Rect(1300.0, 50.0, 1316.0, 70.0) -> width 16, height 20
        # normalize to (0, 0, 16, 20)
        svg_paths = []
        for it in draw["items"]:
            cmd = it[0]
            pts = it[1:]
            norm_pts = [f"{p.x - 1300.0:.2f},{p.y - 50.0:.2f}" for p in pts]
            if cmd == 'l':
                svg_paths.append(f"M {norm_pts[0]} L {norm_pts[1]}")
            elif cmd == 'c':
                # curveTo: p1, p2, p3
                svg_paths.append(f"C {norm_pts[0]} {norm_pts[1]} {norm_pts[2]}")
        print("Path commands:")
        print(" ".join(svg_paths))
