from PIL import Image
import numpy as np

im = Image.open('design/screenshots/hero_crop_1440x1024.png').convert('RGB')
arr = np.array(im)

# Detect pure white or near white regions (the cards have white background #FFFFFF)
# Background of hero is blue #003BE2, lime circle is #CBFC01
# Cards are solid white rectangles with rounded corners

# Let's inspect rows around y=600 to 1000 and columns
# To find the exact white card rectangles:
white_mask = (arr[:, :, 0] > 245) & (arr[:, :, 1] > 245) & (arr[:, :, 2] > 245)

# Find connected components of white pixels for the floating cards:
from scipy.ndimage import label, find_objects

labels, num_features = label(white_mask)
print(f"Total white connected components: {num_features}")

for i, slc in enumerate(find_objects(labels)):
    y_slice, x_slice = slc
    y0, y1 = y_slice.start, y_slice.stop
    x0, x1 = x_slice.start, x_slice.stop
    w = x1 - x0
    h = y1 - y0
    # Floating cards are in y > 500, w > 100
    if y0 > 500 and w > 80 and h > 40:
        print(f"Card candidate #{i}: left={x0}, top={y0}, right={x1}, bottom={y1}, width={w}, height={h}")
