from PIL import Image

im1 = Image.open('src/assets/images/cutout-hero-man-laptop.png')
im2 = Image.open('design/exact_xref_706.png')

print(f"im1 size: {im1.size}, bbox: {im1.getbbox()}")
print(f"im2 size: {im2.size}, bbox: {im2.getbbox()}")

# Save a smaller preview of both to compare
im1.resize((300, 300)).save('design/compare_im1.png')
im2.resize((300, 300)).save('design/compare_im2.png')
print("Saved previews")
