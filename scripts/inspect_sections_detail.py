import pymupdf as fitz
import json

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]

with open("scripts/page1_text_layout.json", "r", encoding="utf-8") as f:
    text_spans = json.load(f)

def print_section(title, y_min, y_max):
    print(f"\n=======================================================")
    print(f"=== {title} (y: {y_min} -> {y_max}) ===")
    print(f"=======================================================")
    spans = [s for s in text_spans if y_min <= s["y0"] < y_max]
    for s in spans:
        print(f"[{s['y0']:.1f}, x={s['x0']:.1f}, size={s['size']}, color={s['color']}]: {s['text']}")

# Let's inspect each section
print_section("1. HERO (y: 0 -> 1024)", 0, 1024)
print_section("2. PARTNER STRIP (y: 1024 -> 1200)", 1024, 1200)
print_section("3. COURSES (y: 1200 -> 2550)", 1200, 2550)
print_section("4. CATEGORIES (y: 2550 -> 3250)", 2550, 3250)
print_section("5. FEATURE ROW 1 (y: 3250 -> 3900)", 3250, 3900)
print_section("6. FEATURE ROW 2 (y: 3900 -> 4580)", 3900, 4580)
print_section("7. CREATOR BANNER (y: 4580 -> 5100)", 4580, 5100)
print_section("8. TESTIMONIALS (y: 5100 -> 5852)", 5100, 5852)
