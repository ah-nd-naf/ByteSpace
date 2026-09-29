import os
import fitz
from PIL import Image

def optimize_and_save(src_path, dst_path, max_dim=None, to_webp=False, quality=88):
    im = Image.open(src_path)
    
    # Check if image has transparency
    extrema = im.getextrema()
    has_alpha = len(extrema) == 4 and (extrema[3][0] < 255 or extrema[3][1] < 255)
    
    if max_dim:
        w, h = im.size
        if max(w, h) > max_dim:
            if w >= h:
                new_w = max_dim
                new_h = int(h * (max_dim / w))
            else:
                new_h = max_dim
                new_w = int(w * (max_dim / h))
            im = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
    if to_webp and not has_alpha:
        im = im.convert('RGB')
        im.save(dst_path, 'WEBP', quality=quality)
    elif to_webp and has_alpha:
        im.save(dst_path, 'WEBP', quality=quality)
    else:
        im.save(dst_path, 'PNG', optimize=True)
        
    print(f"Saved: {os.path.basename(dst_path)} ({im.size[0]}x{im.size[1]})")

def main():
    src_dir = 'design/assets'
    dst_dir = 'src/assets/images'
    os.makedirs(dst_dir, exist_ok=True)
    
    doc = fitz.open('design/prototype.pdf')
    
    # 1. Course Thumbnails
    courses = [
        ('page1-img11-682x454.png', 'course-1.webp'), # dashboard
        ('page1-img48-698x465.png', 'course-2.webp'), # design planning
        ('page1-img52-682x454.png', 'course-3.webp'), # team meeting
        ('page1-img56-682x454.png', 'course-4.webp'), # desk/monitor
        ('page1-img65-682x454.png', 'course-5.webp'), # chart on laptop
        ('page1-img69-682x454.png', 'course-6.webp'), # icons sketch
    ]
    for src_name, dst_name in courses:
        optimize_and_save(os.path.join(src_dir, src_name), os.path.join(dst_dir, dst_name), max_dim=1200, to_webp=True)
        
    # 2. Avatars (max 400px)
    avatars = [
        ('page1-img7-300x300.png', 'avatar-01.webp'),
        ('page1-img8-200x200.png', 'avatar-02.webp'), # Sarah M. (Testimonial)
        ('page1-img9-200x200.png', 'avatar-03.webp'), # PurePearl Studio
        ('page1-img10-200x200.png', 'avatar-04.webp'),
        ('page1-img15-200x200.png', 'avatar-05.webp'),
        ('page1-img16-200x200.png', 'avatar-06.webp'),
        ('page1-img19-200x200.png', 'avatar-07.webp'),
        ('page1-img21-200x200.png', 'avatar-08.webp'),
        ('page1-img23-200x200.png', 'avatar-09.webp'),
        ('page1-img25-200x200.png', 'avatar-10.webp'),
        ('page1-img60-200x200.png', 'avatar-11.webp'), # James L. (Testimonial)
        ('page1-img61-200x200.png', 'avatar-12.webp'), # Alex B. (Testimonial)
        ('page7-img1-200x200.png', 'avatar-13.webp'), # Reviewer 1
        ('page7-img2-200x200.png', 'avatar-14.webp'), # Reviewer 2
    ]
    for src_name, dst_name in avatars:
        optimize_and_save(os.path.join(src_dir, src_name), os.path.join(dst_dir, dst_name), max_dim=400, to_webp=True, quality=90)
        
    # 3. Cut-outs (Keep PNG for transparency)
    cutouts = [
        ('page1-img17-500x500.png', 'cutout-woman-tablet.png'),
        ('page1-img31-516x483.png', 'cutout-woman-laptop.png'),
    ]
    for src_name, dst_name in cutouts:
        optimize_and_save(os.path.join(src_dir, src_name), os.path.join(dst_dir, dst_name), to_webp=False)
        
    # 4. Course Detail Images
    course_details = [
        ('page5-img1-480x309.png', 'course-detail-gallery-1.webp'),
        ('page5-img2-480x270.png', 'course-detail-gallery-2.webp'),
        ('page5-img3-384x480.png', 'course-detail-gallery-3.webp'),
        ('page5-img4-480x320.png', 'course-detail-gallery-4.webp'),
        ('page5-img9-1440x960.png', 'course-detail-hero-woman.webp'),
        ('page5-img11-480x480.png', 'course-detail-author-man.webp'),
    ]
    for src_name, dst_name in course_details:
        optimize_and_save(os.path.join(src_dir, src_name), os.path.join(dst_dir, dst_name), max_dim=1200, to_webp=True)
        
    # 5. 3D Shapes (Resize to ~600px with alpha, save as PNG)
    shapes = [
        ('page1-img1-2500x2500.png', 'shape-cone.png'),
        ('page1-img2-2500x2500.png', 'shape-cylinder.png'),
        ('page1-img3-2500x2500.png', 'shape-torus.png'),
        ('page1-img4-2500x2500.png', 'shape-spring-1.png'),
        ('page1-img5-2500x2500.png', 'shape-pyramid.png'),
        ('page1-img6-2500x2500.png', 'shape-spring-2.png'),
    ]
    for src_name, dst_name in shapes:
        optimize_and_save(os.path.join(src_dir, src_name), os.path.join(dst_dir, dst_name), max_dim=600, to_webp=False)
        
    # 6. Render 2x crops for visible artwork not covered above
    print("\nRendering 2x crops for composite design illustrations...")
    mat = fitz.Matrix(2.0, 2.0)
    
    # 6a. Register / Login Left Card Illustration
    p2 = doc[1]
    pix2 = p2.get_pixmap(matrix=mat)
    im_p2 = Image.frombytes('RGB', [pix2.width, pix2.height], pix2.samples)
    # 1x coords: x: 90 to 600, y: 310 to 900 -> 2x coords: x: 180 to 1200, y: 620 to 1800
    crop_auth = im_p2.crop((180, 620, 1200, 1800))
    crop_auth.save(os.path.join(dst_dir, 'auth-card-illustration.webp'), 'WEBP', quality=90)
    print(f"Saved: auth-card-illustration.webp ({crop_auth.size[0]}x{crop_auth.size[1]})")
    
    # 6b. Creator Profile Banner (Page 8 top)
    p8 = doc[7]
    pix8 = p8.get_pixmap(matrix=mat)
    im_p8 = Image.frombytes('RGB', [pix8.width, pix8.height], pix8.samples)
    # 1x coords: x: 0 to 1440, y: 0 to 290 -> 2x: x: 0 to 2880, y: 0 to 580
    crop_banner = im_p8.crop((0, 0, 2880, 580))
    crop_banner.save(os.path.join(dst_dir, 'creator-banner.webp'), 'WEBP', quality=90)
    print(f"Saved: creator-banner.webp ({crop_banner.size[0]}x{crop_banner.size[1]})")
    
    # 6c. Course Video Preview Frame (Page 5 & 6)
    p5 = doc[4]
    pix5 = p5.get_pixmap(matrix=mat)
    im_p5 = Image.frombytes('RGB', [pix5.width, pix5.height], pix5.samples)
    # 1x coords: x: 125 to 845, y: 416 to 895 -> 2x: x: 250 to 1690, y: 832 to 1790
    crop_video = im_p5.crop((250, 832, 1690, 1790))
    crop_video.save(os.path.join(dst_dir, 'course-video-player.webp'), 'WEBP', quality=90)
    print(f"Saved: course-video-player.webp ({crop_video.size[0]}x{crop_video.size[1]})")
    
    # 6d. Home Analytics & Revenue Chart Card (Page 1)
    p1 = doc[0]
    pix1 = p1.get_pixmap(matrix=mat)
    im_p1 = Image.frombytes('RGB', [pix1.width, pix1.height], pix1.samples)
    # 1x coords: x: 100 to 680, y: 3880 to 4420 -> 2x: x: 200 to 1360, y: 7760 to 8840
    crop_analytics = im_p1.crop((200, 7760, 1360, 8840))
    crop_analytics.save(os.path.join(dst_dir, 'analytics-revenue-card.webp'), 'WEBP', quality=90)
    print(f"Saved: analytics-revenue-card.webp ({crop_analytics.size[0]}x{crop_analytics.size[1]})")

    print("\nAll assets successfully curated into src/assets/images/!")

if __name__ == '__main__':
    main()
