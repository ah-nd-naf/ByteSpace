from PIL import Image

im = Image.open('design/screenshots/page-1-home.png')
print(f"page-1-home.png size: {im.size}")

# The image is 1440 x 6377 (or scaled)
# Let's crop the hero section (0 to 1024)
scale_x = im.width / 1440.0
scale_y = im.height / 6377.0
print(f"Scale: x={scale_x}, y={scale_y}")

hero_crop = im.crop((0, 0, int(1440 * scale_x), int(1024 * scale_y)))
hero_crop.save('design/screenshots/hero_crop_1440x1024.png')
print("Saved hero_crop_1440x1024.png")
