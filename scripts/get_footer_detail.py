import pymupdf as fitz

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]
d = p1.get_text("dict")

print("=== ALL FOOTER TEXT BLOCKS (y > 5850) ===")
footer_lines = []
for b in d["blocks"]:
    if "lines" in b:
        for l in b["lines"]:
            line_text = "".join(s["text"] for s in l["spans"])
            bbox = l["bbox"]
            if bbox[1] > 5850:
                footer_lines.append((round(bbox[1], 1), round(bbox[0], 1), round(bbox[2], 1), round(bbox[3], 1), line_text, l["spans"][0]["size"], l["spans"][0]["font"]))

footer_lines.sort(key=lambda x: (x[0], x[1]))
for fl in footer_lines:
    print(f"y0={fl[0]} x0={fl[1]} x1={fl[2]} text='{fl[4]}' size={fl[5]} font={fl[6]}")
