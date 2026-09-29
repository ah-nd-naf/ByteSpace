import os
import math
import hashlib
from PIL import Image, ImageDraw, ImageFont
import fitz

def main():
    doc = fitz.open('design/prototype.pdf')
    assets_dir = 'design/assets'
    files = sorted([f for f in os.listdir(assets_dir) if f.endswith('.png') and not f.startswith('_')])
    print(f"Total asset files found: {len(files)}")

    # Map file hashes and inspect each image
    classified_assets = []
    
    for filename in files:
        filepath = os.path.join(assets_dir, filename)
        im = Image.open(filepath)
        w, h = im.size
        
        # Check alpha
        extrema = im.getextrema()
        has_alpha = len(extrema) == 4
        alpha_min = extrema[3][0] if has_alpha else 255
        alpha_max = extrema[3][1] if has_alpha else 255
        
        # Parse page and index from filename: page{N}-img{index}-{w}x{h}.png
        parts = filename.split('-')
        page_num = int(parts[0].replace('page', ''))
        img_index = int(parts[1].replace('img', ''))
        
        # Determine likely category
        category = "Asset"
        details = ""
        
        if alpha_max <= 60:
            category = "Shadow / Glow"
            details = "Rasterized Figma drop shadow or glow effect"
        elif w == h and w in [200, 300]:
            category = "Avatar"
            details = f"Instructor / user profile avatar ({w}x{h})"
        elif w == 480 and h == 480:
            category = "Avatar / Badge"
            details = "Square avatar or profile illustration"
        elif w == 500 and h == 500:
            category = "3D Graphic / Icon"
            details = "Decorative 3D feature illustration"
        elif w == 2500 and h == 2500:
            category = "Hero Graphic / Illustration"
            details = "High-res floating hero element / illustration"
        elif (w, h) in [(682, 454), (746, 454), (698, 465), (480, 270), (480, 309), (480, 320), (384, 480), (1440, 960), (1760, 1278)]:
            if alpha_max < 255 and (w, h) == (746, 454) and alpha_min == 0:
                # Could be a card shadow or bordered card
                category = "Course Card / Shadow"
                details = f"Course card frame / shadow container ({w}x{h})"
            else:
                category = "Course Thumbnail"
                details = f"Course cover / preview photo ({w}x{h})"
        elif w > 2000 or h > 2000:
            if alpha_max <= 100:
                category = "Glow / Ambient Shadow"
                details = f"Large atmospheric blur or backdrop shadow ({w}x{h})"
            else:
                category = "Page Backdrop / Section Banner"
                details = f"Full-width background or hero backdrop ({w}x{h})"
        else:
            category = "UI Asset / Image"
            details = f"Embedded raster graphic ({w}x{h})"

        # Refine by page context
        if page_num == 1:
            if "Avatar" in category:
                details += " (Featured creators or testimonials)"
            elif "Course" in category:
                details += " (Popular / Featured courses grid)"
        elif page_num in [2, 3]:
            details += " (Auth / Sign-in decorative element)"
        elif page_num == 4:
            details += " (Course search listing / filters)"
        elif page_num in [5, 6, 7]:
            details += " (Course details / lessons / reviews)"
        elif page_num == 8:
            details += " (Creator profile & portfolio)"

        classified_assets.append({
            'filename': filename,
            'page': page_num,
            'index': img_index,
            'width': w,
            'height': h,
            'category': category,
            'details': details,
            'alpha_min': alpha_min,
            'alpha_max': alpha_max,
            'filepath': filepath
        })

    # Sort classified assets by page, then index
    classified_assets.sort(key=lambda x: (x['page'], x['index']))

    # 1. Generate _contact-sheet.png
    cols = 8
    rows = math.ceil(len(classified_assets) / cols)
    card_w = 260
    card_h = 240
    padding = 24
    header_h = 90
    
    sheet_w = cols * card_w + padding * 2
    sheet_h = rows * card_h + padding * 2 + header_h
    
    print(f"Creating contact sheet: {sheet_w}x{sheet_h} for {len(classified_assets)} items ({cols}x{rows} grid)...")
    sheet = Image.new("RGBA", (sheet_w, sheet_h), (15, 23, 42, 255)) # Dark slate bg #0f172a
    draw = ImageDraw.Draw(sheet)
    
    font_title = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 26)
    font_subtitle = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 14)
    font_bold = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 11)
    font_regular = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 11)
    font_meta = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 10)
    
    # Draw header
    draw.text((padding, 20), "ByteSpace Design Assets Contact Sheet", fill=(255, 255, 255, 255), font=font_title)
    draw.text((padding, 56), f"Total extracted unique assets: {len(classified_assets)}  •  Source: /design/prototype.pdf  •  All embedded images with smask transparency", fill=(148, 163, 184, 255), font=font_subtitle)
    draw.line([(padding, header_h - 10), (sheet_w - padding, header_h - 10)], fill=(51, 65, 85, 255), width=1)
    
    # Create checkerboard pattern for thumbnail backgrounds (to reveal alpha & white/dark assets)
    checker_size = 10
    thumb_box_w = 236
    thumb_box_h = 145
    checker_img = Image.new("RGBA", (thumb_box_w, thumb_box_h), (241, 245, 249, 255))
    ch_draw = ImageDraw.Draw(checker_img)
    for cx in range(0, thumb_box_w, checker_size):
        for cy in range(0, thumb_box_h, checker_size):
            if ((cx // checker_size) + (cy // checker_size)) % 2 == 1:
                ch_draw.rectangle([cx, cy, cx + checker_size - 1, cy + checker_size - 1], fill=(226, 232, 240, 255))

    for idx, asset in enumerate(classified_assets):
        col = idx % cols
        row = idx // cols
        
        x0 = padding + col * card_w
        y0 = header_h + padding + row * card_h
        x1 = x0 + card_w - 12
        y1 = y0 + card_h - 12
        
        # Card background
        draw.rounded_rectangle([x0, y0, x1, y1], radius=8, fill=(30, 41, 59, 255), outline=(51, 65, 85, 255), width=1)
        
        # Thumbnail area
        tx0 = x0 + 6
        ty0 = y0 + 6
        
        # Paste checkerboard
        sheet.paste(checker_img, (tx0, ty0))
        
        # Load and resize asset thumbnail
        try:
            im_thumb = Image.open(asset['filepath']).convert("RGBA")
            im_thumb.thumbnail((thumb_box_w - 8, thumb_box_h - 8), Image.Resampling.LANCZOS)
            
            # Center thumbnail in box
            ox = tx0 + (thumb_box_w - im_thumb.width) // 2
            oy = ty0 + (thumb_box_h - im_thumb.height) // 2
            sheet.alpha_composite(im_thumb, (ox, oy))
        except Exception as e:
            print(f"Error thumbnailing {asset['filename']}: {e}")
            
        # Draw labels below thumbnail
        label_y = ty0 + thumb_box_h + 6
        # Filename (shortened if necessary)
        short_name = asset['filename']
        if len(short_name) > 30:
            short_name = short_name[:28] + "…"
        draw.text((x0 + 8, label_y), short_name, fill=(248, 250, 252, 255), font=font_bold)
        
        # Metadata: Page & Dimensions
        meta_text = f"P{asset['page']} • {asset['width']}x{asset['height']}"
        draw.text((x0 + 8, label_y + 16), meta_text, fill=(148, 163, 184, 255), font=font_meta)
        
        # Category tag badge
        cat = asset['category']
        cat_color = (56, 189, 248, 255) # light blue
        if "Avatar" in cat:
            cat_color = (74, 222, 128, 255) # green
        elif "Thumbnail" in cat:
            cat_color = (250, 204, 21, 255) # yellow
        elif "Shadow" in cat or "Glow" in cat:
            cat_color = (148, 163, 184, 255) # gray
        elif "Hero" in cat:
            cat_color = (244, 114, 182, 255) # pink
            
        draw.text((x0 + 8, label_y + 29), f"[{cat}]", fill=cat_color, font=font_regular)

    contact_sheet_path = os.path.join(assets_dir, '_contact-sheet.png')
    sheet.save(contact_sheet_path, "PNG")
    print(f"Contact sheet saved successfully to {contact_sheet_path}!")

    # 2. Generate README.md
    readme_path = os.path.join(assets_dir, 'README.md')
    
    # Categorize summary counts
    cat_counts = {}
    for a in classified_assets:
        cat_counts[a['category']] = cat_counts.get(a['category'], 0) + 1
        
    readme_lines = [
        "# ByteSpace Extracted Assets",
        "",
        "Extracted from `design/prototype.pdf` using PyMuPDF (`fitz.Pixmap(base, mask)`) to combine base raster images with their embedded alpha smasks.",
        "",
        "## Summary Statistics",
        f"- **Total Unique Extracted Assets:** {len(classified_assets)}",
        f"- **Contact Sheet:** [`_contact-sheet.png`](./_contact-sheet.png) (visual thumbnail grid of all assets)",
        "",
        "| Category | Count |",
        "| :--- | :--- |"
    ]
    
    for cat, cnt in sorted(cat_counts.items(), key=lambda x: -x[1]):
        readme_lines.append(f"| **{cat}** | {cnt} |")
        
    readme_lines.extend([
        "",
        "---",
        "",
        "## Asset Catalog by Page",
        ""
    ])
    
    for p in range(1, 10):
        page_assets = [a for a in classified_assets if a['page'] == p]
        if not page_assets:
            readme_lines.extend([
                f"### Page {p}",
                "*(No unique embedded raster images)*",
                ""
            ])
            continue
            
        page_names = {
            1: "Home",
            2: "Register",
            3: "Login",
            4: "Search",
            5: "Course Details",
            6: "Course Lessons",
            7: "Course Reviews",
            8: "Creator Profile",
            9: "404 Not Found"
        }
        
        readme_lines.extend([
            f"### Page {p}: {page_names.get(p, '')} ({len(page_assets)} unique assets)",
            "",
            "| Filename | Dimensions | Alpha | Category | What it is / Context |",
            "| :--- | :--- | :--- | :--- | :--- |"
        ])
        
        for a in page_assets:
            alpha_desc = f"{a['alpha_min']}-{a['alpha_max']}"
            if a['alpha_max'] <= 60:
                alpha_desc += " (Low Alpha)"
            elif a['alpha_min'] == 255:
                alpha_desc = "Opaque (255)"
            else:
                alpha_desc += " (Transparent)"
                
            readme_lines.append(
                f"| `{a['filename']}` | {a['width']}×{a['height']} | {alpha_desc} | **{a['category']}** | {a['details']} |"
            )
            
        readme_lines.append("")
        
    # Section 5: Vector items that could not be extracted
    readme_lines.extend([
        "---",
        "",
        "## Vector Items Not Extracted (To be recreated as SVG/CSS)",
        "",
        "The following elements in `design/prototype.pdf` are native PDF vector paths/shapes (not raster images) and could not be extracted as PNGs. Per project instructions, these will be recreated as SVG components or styled with CSS in subsequent UI implementation phases:",
        "",
        "1. **ByteSpace Brand Logo:**",
        "   - Wordmark 'ByteSpace' with geometric lime accent icon / terminal brackets.",
        "",
        "2. **Navigation & Action Icons:**",
        "   - Search magnifying glass icon (`Header`, `Search bar`)",
        "   - Shopping cart / Bag icon",
        "   - Notification / Bell icon",
        "   - Downward chevron dropdown arrows (category selectors, sorting dropdowns)",
        "   - Arrow buttons (carousel navigation, 'Next', 'Previous', pagination)",
        "",
        "3. **Lime Geometric Badges & Accents:**",
        "   - Lime rounded pill badges ('POPULAR', 'NEW', 'BESTSELLER', 'FREE')",
        "   - Lime geometric background shapes and floating decorative polygons",
        "   - Section header underline / highlight shapes",
        "",
        "4. **Rating Stars:**",
        "   - 5-star rating icons (filled star, half-filled star, outline star)",
        "",
        "5. **Social Media Icons (Footer):**",
        "   - Twitter / X icon",
        "   - LinkedIn icon",
        "   - YouTube icon",
        "   - Facebook / Instagram icons",
        "   - Discord / GitHub icons",
        "",
        "6. **Form & Interactive Icons:**",
        "   - Eye toggle (show/hide password) on Login & Register pages",
        "   - Email envelope icon & lock security icon",
        "   - Checkmark and radio toggle vector shapes",
        "",
        "7. **Curriculum & Lesson Status Icons:**",
        "   - Play video icon (circle with triangle play arrow)",
        "   - Document / Article icon",
        "   - Lock icon for locked premium lessons",
        "   - Accordion chevron arrows (expand/collapse modules)",
        "",
        "8. **Creator Badges:**",
        "   - Verified creator checkmark badge",
        "   - Top Rated instructor ribbon / star badge",
        "",
        "9. **404 Not Found Illustration:**",
        "   - Geometric '404' typography, vector illustration of broken link / satellite / space element."
    ])

    with open(readme_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(readme_lines))
        
    print(f"README saved successfully to {readme_path}!")

if __name__ == '__main__':
    main()
