import pymupdf as fitz
import json

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]
d = p1.get_text("dict")

print(f"Page 1 dimensions: {p1.rect}")

sections = []
for b in d["blocks"]:
    if "lines" in b:
        for l in b["lines"]:
            spans_text = "".join(s["text"] for s in l["spans"]).strip()
            if not spans_text:
                continue
            first_span = l["spans"][0]
            bbox = l["bbox"]
            sections.append({
                "y0": round(bbox[1], 1),
                "y1": round(bbox[3], 1),
                "x0": round(bbox[0], 1),
                "x1": round(bbox[2], 1),
                "text": spans_text,
                "size": round(first_span["size"], 1),
                "font": first_span["font"],
                "color": hex(first_span["color"])
            })

sections.sort(key=lambda s: s["y0"])

with open("scripts/page1_text_layout.json", "w", encoding="utf-8") as f:
    json.dump(sections, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(sections)} text spans to scripts/page1_text_layout.json")

# Group into vertical sections by large y gaps
current_y = 0
print("\n--- Summary of Major Headings (size >= 24) on Page 1 ---")
for s in sections:
    if s["size"] >= 24 and s["y0"] > 100:
        print(f"y={s['y0']:.1f} (size={s['size']}): {s['text']}")
