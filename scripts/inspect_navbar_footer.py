import fitz # PyMuPDF
import json

doc = fitz.open("design/prototype.pdf")
print(f"Total pages: {len(doc)}")

for page_num in range(len(doc)):
    page = doc[page_num]
    rect = page.rect
    text = page.get_text()
    first_few_lines = [line.strip() for line in text.split("\n") if line.strip()][:5]
    print(f"\n--- Page {page_num + 1} ({rect.width}x{rect.height}) ---")
    print(f"Sample text: {first_few_lines}")

    # Check for nav keywords
    has_nav = "Home" in text and "Courses" in text and "Creators" in text
    has_footer = "ByteSpace" in text and ("Subscribe" in text or "Newsletter" in text or "2024" in text or "All rights reserved" in text or "Privacy" in text)
    print(f"Has Nav: {has_nav}, Has Footer keyword: {has_footer}")
