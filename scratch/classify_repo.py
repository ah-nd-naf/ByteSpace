import os, glob

root = r'f:\Trial Projects\ByteSpace'
exclude_dirs = {'node_modules', '.git', 'dist', '.cleanup-baseline'}

all_files = []
for dirpath, dirnames, filenames in os.walk(root):
    dirnames[:] = [d for d in dirnames if d not in exclude_dirs]
    for fn in filenames:
        rel = os.path.relpath(os.path.join(dirpath, fn), root).replace('\\', '/')
        all_files.append(rel)

print(f"Total non-ignored files: {len(all_files)}")

# Classification rules:
# 1. KEEP-AS-IS:
keep_as_is_patterns = {
    'package.json', 'package-lock.json', 'vite.config.js', '.oxlintrc.json',
    'index.html', 'README.md', '.env.example', '.env.local', '.gitignore'
}

# 2. DEV-ONLY:
# - all files in scratch/
# - all files in scripts/
# - all files in design/ (including prototype.pdf, screenshots, reference, assets)
# - all files in docs/
# - PROJECT_CONTEXT.md
# - scratch_test_icon4.py
# - all .gitkeep files
# - src/pages/DevTokens.jsx
# - src/App.css
# - src/assets/react.svg
# - public/vite.svg

# 3. UNUSED:
# - src/lib/firebase.js (firebase initialized but not imported anywhere)
# - src/assets/icon-private-consultation.png
# - src/assets/images/auto-layout.svg.svg
# - src/assets/images/logo-bytespace.svg (App uses inline <Logo />)
# - src/assets/images/shape-pyramid.png (untinted)
# - src/assets/images/shape-spring-1.png (untinted)
# - src/assets/images/shape-spring-2.png (untinted)
# - src/assets/images/shape-torus.png (untinted)
# - src/assets/images/raw_backup/* (4 files)

# 4. USED:
# - src/main.jsx
# - src/App.jsx
# - src/index.css
# - src/layouts/RootLayout.jsx
# - src/components/Container.jsx, CourseCard.jsx, Footer.jsx, Logo.jsx, Navbar.jsx, PartnerLogos.jsx
# - src/pages/Home.jsx, CourseDetails.jsx, CreatorProfile.jsx, Login.jsx, Register.jsx, Search.jsx, NotFound.jsx
# - public/favicon.svg
# - src/assets/images/index.js
# - and all the 50 used images in src/assets/images/

categorized = {'USED': [], 'UNUSED': [], 'DEV-ONLY': [], 'KEEP-AS-IS': []}

for f in all_files:
    if f in keep_as_is_patterns:
        categorized['KEEP-AS-IS'].append(f)
    elif f.startswith('scratch/') or f.startswith('scripts/') or f.startswith('design/') or f.startswith('docs/') or \
         f == 'PROJECT_CONTEXT.md' or f == 'scratch_test_icon4.py' or f.endswith('.gitkeep') or \
         f == 'src/pages/DevTokens.jsx' or f == 'src/App.css' or f == 'src/assets/react.svg' or f == 'public/vite.svg':
        categorized['DEV-ONLY'].append(f)
    elif f == 'src/lib/firebase.js' or f == 'src/assets/icon-private-consultation.png' or \
         f.startswith('src/assets/images/raw_backup/') or f == 'src/assets/images/auto-layout.svg.svg' or \
         f in {'src/assets/images/logo-bytespace.svg', 'src/assets/images/shape-pyramid.png', 
               'src/assets/images/shape-spring-1.png', 'src/assets/images/shape-spring-2.png', 
               'src/assets/images/shape-torus.png'}:
        categorized['UNUSED'].append(f)
    else:
        categorized['USED'].append(f)

for cat in ['USED', 'UNUSED', 'DEV-ONLY', 'KEEP-AS-IS']:
    print(f"{cat}: {len(categorized[cat])} files")
