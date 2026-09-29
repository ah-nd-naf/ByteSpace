import pymupdf as fitz
import json

with open("scripts/page1_text_layout.json", "r", encoding="utf-8") as f:
    text_spans = json.load(f)

print("=== HERO TEXT SPANS (y: 0 -> 1024) ===")
for s in text_spans:
    if 0 <= s["y0"] < 1024:
        print(f"[{s['y0']:.1f}, x={s['x0']:.1f}, size={s['size']}]: {s['text']}")

print("\n=== COURSES TEXT SPANS (y: 1200 -> 2550) ===")
for s in text_spans:
    if 1200 <= s["y0"] < 2550:
        print(f"[{s['y0']:.1f}, x={s['x0']:.1f}, size={s['size']}]: {s['text']}")
