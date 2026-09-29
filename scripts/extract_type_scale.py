import fitz

doc = fitz.open('design/prototype.pdf')
type_styles = {}

for pno in range(len(doc)):
    page = doc[pno]
    td = page.get_text('dict')
    for block in td['blocks']:
        if 'lines' in block:
            for line in block['lines']:
                for span in line['spans']:
                    text = span['text'].strip()
                    if not text: continue
                    sz = round(span['size'], 1)
                    flags = span['flags']
                    font = span['font']
                    color = span['color']
                    r = (color >> 16) & 255
                    g = (color >> 8) & 255
                    b = color & 255
                    hex_col = f'#{r:02X}{g:02X}{b:02X}'
                    
                    key = (sz, font, hex_col)
                    if key not in type_styles:
                        type_styles[key] = {
                            'size': sz,
                            'font': font,
                            'flags': flags,
                            'color': hex_col,
                            'samples': []
                        }
                    if len(type_styles[key]['samples']) < 2 and text not in type_styles[key]['samples']:
                        type_styles[key]['samples'].append(text[:35])

print(f"Total distinct text styles: {len(type_styles)}")
by_size = {}
for k, v in type_styles.items():
    by_size.setdefault(v['size'], []).append(v)

for sz in sorted(by_size.keys(), reverse=True):
    print(f"=== Size: {sz}px ===")
    for item in by_size[sz]:
        font_name = item['font']
        col = item['color']
        samples = item['samples']
        safe_samples = [s.encode('ascii', 'replace').decode() for s in samples]
        print(f"   font={font_name:25} color={col:8} samples={safe_samples}")
