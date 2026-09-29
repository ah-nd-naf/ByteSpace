import pymupdf as fitz

doc = fitz.open("design/prototype.pdf")
for page_num in [0, 3, 4, 7, 8]: # Page 1, 4, 5, 8, 9
    p = doc[page_num]
    d = p.get_text("dict")
    spans = []
    for b in d["blocks"]:
        if "lines" in b:
            for l in b["lines"]:
                for s in l["spans"]:
                    if s["bbox"][1] < 120:
                        spans.append((s["text"], hex(s["color"])))
    print(f"Page {page_num + 1} Nav text:", spans)
