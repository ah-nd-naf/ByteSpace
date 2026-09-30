import os
from PIL import Image

# Let's read p5_i4_zoom.png and get the 20x20 bitmap
im = Image.open('C:/Users/Ahnaf/.gemini/antigravity-ide/brain/c1f8ed3e-7b56-430f-8faa-2bb06bb3b9f1/p5_i4_zoom.png')
im_1x = im.resize((im.width // 8, im.height // 8), Image.Resampling.BOX)
crop_exact = im_1x.crop((10, 11, 30, 31))

# Let's create an exact SVG that reproduces these paths cleanly
html = '''<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
body { background: white; font-family: sans-serif; padding: 20px; display: flex; gap: 40px; }
.box { display: flex; flex-direction: column; align-items: center; gap: 10px; }
svg { width: 20px; height: 20px; color: #003BE2; }
.zoom svg { width: 80px; height: 80px; }
</style>
</head>
<body>
  <div class="box">
    <h4>Figma 80px Reference</h4>
    <img src="C:/Users/Ahnaf/.gemini/antigravity-ide/brain/c1f8ed3e-7b56-430f-8faa-2bb06bb3b9f1/p5_i4_zoom.png" width="80" height="80" style="image-rendering: pixelated;" />
  </div>

  <div class="box zoom">
    <h4>Vector Candidate 1</h4>
    <svg viewBox="0 0 20 20" fill="#003BE2">
      <!-- Person 1 (Top Left) -->
      <circle cx="3.5" cy="2" r="1.8" />
      <path d="M0 6C0 5.2.7 4.5 1.5 4.5h4c.4 0 .8.2 1.1.5l1.6 1.8c.2.2.1.6-.2.8-.2.2-.6.1-.8-.2L6 6.2H1.5C.8 6.2.2 6.8.2 7.5V9H7V7.5H0z" />
      
      <!-- Waves -->
      <path d="M7.5 11c1.5-1.2 2-2.8 1.8-4.5" fill="none" stroke="#003BE2" stroke-width="2" stroke-linecap="round" />
      <path d="M10 9c1-1 1.5-2.2 1.2-3.5" fill="none" stroke="#003BE2" stroke-width="2" stroke-linecap="round" />

      <!-- Person 2 (Bottom Right) -->
      <circle cx="15.5" cy="13" r="1.8" />
      <path d="M12 19c-.8 0-1.5-.7-1.5-1.5V16h7v1.5c0 .8-.7 1.5-1.5 1.5h-4z" />
      <path d="M12 16.5l-1.6-1.8c-.2-.2-.1-.6.2-.8.2-.2.6-.1.8.2l1.2 1.4h3.4c.4 0 .7.3.7.7v.3h-4.7z" />
    </svg>
  </div>

  <div class="box zoom">
    <h4>Vector Candidate 2 (Clean Polished)</h4>
    <svg viewBox="0 0 20 20" fill="#003BE2">
      <!-- User 1: Top-Left -->
      <circle cx="3.5" cy="2" r="1.8" />
      <path d="M0 5.5A1.5 1.5 0 0 1 1.5 4h3.6a1 1 0 0 1 .8.4l1.8 2.2a.5.5 0 0 1-.1.7.5.5 0 0 1-.7-.1L5.8 5.5H1.5a.5.5 0 0 0-.5.5V9h6.5V7h-7v-1.5z" />

      <!-- User 2: Bottom-Right -->
      <circle cx="15.5" cy="13" r="1.8" />
      <path d="M11 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1 1 0 0 1 .8.4l1.8 2.2a.5.5 0 0 1-.1.7.5.5 0 0 1-.7-.1l-1.6-1.7H12.5a.5.5 0 0 0-.5.5V19h7v-1.5" transform="rotate(180 15 16.5)" />

      <!-- Broadcast Sound Arcs -->
      <path d="M7 11.5c2-1.5 2.8-3.8 2.5-6" fill="none" stroke="#003BE2" stroke-width="2" stroke-linecap="round" />
      <path d="M10 9.5c1.2-1 1.8-2.4 1.5-3.8" fill="none" stroke="#003BE2" stroke-width="2" stroke-linecap="round" />
    </svg>
  </div>
</body>
</html>'''

with open('C:/Users/Ahnaf/.gemini/antigravity-ide/brain/c1f8ed3e-7b56-430f-8faa-2bb06bb3b9f1/test_i4.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Saved test_i4.html')
