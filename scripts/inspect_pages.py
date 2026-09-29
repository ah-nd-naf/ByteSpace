import pymupdf

doc = pymupdf.open('design/prototype.pdf')
for i, page in enumerate(doc):
    text = page.get_text()[:100].replace('\n', ' ')
    print(f"Page {i}: {page.rect} - {text}")
