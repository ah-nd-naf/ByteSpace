import os, glob, re

root = r'f:\Trial Projects\ByteSpace'
with open(os.path.join(root, 'src', 'assets', 'images', 'index.js'), 'r', encoding='utf-8') as f:
    index_lines = f.readlines()

asset_map = {}
for line in index_lines:
    line = line.strip()
    if line.startswith('import ') and ' from ' in line:
        parts = line.split(' from ')
        var_name = parts[0].replace('import ', '').strip()
        # strip inline comment
        from_part = parts[1].split('//')[0].strip()
        file_name = from_part.replace("'", "").replace('"', '').replace(';', '').replace('./', '').strip()
        asset_map[var_name] = file_name

print(f"Total assets imported in index.js: {len(asset_map)}")

actual_files = set()
for dirpath, _, filenames in os.walk(os.path.join(root, 'src', 'assets', 'images')):
    for fn in filenames:
        rel = os.path.relpath(os.path.join(dirpath, fn), os.path.join(root, 'src', 'assets', 'images')).replace('\\', '/')
        actual_files.add(rel)

print(f"Total actual files on disk in src/assets/images: {len(actual_files)}")

jsx_files = glob.glob(os.path.join(root, 'src', '**', '*.jsx'), recursive=True)
usage_map = {var: [] for var in asset_map}

for jf in jsx_files:
    rel_path = os.path.relpath(jf, root).replace('\\', '/')
    with open(jf, 'r', encoding='utf-8') as fp:
        code = fp.read()
    for var in asset_map:
        if re.search(r'\b' + re.escape(var) + r'\b', code):
            usage_map[var].append(rel_path)

used_vars = {v: files for v, files in usage_map.items() if len(files) > 0}
unused_vars = {v: asset_map[v] for v, files in usage_map.items() if len(files) == 0}

print(f"\nUSED VARS IN RUNNING APP: {len(used_vars)}")
print(f"UNUSED VARS IN RUNNING APP: {len(unused_vars)}")

print("\n=== UNUSED IMAGE ASSETS (Exported in index.js but never rendered in any page/component) ===")
for var, fn in sorted(unused_vars.items()):
    print(f"  - {var}: {fn}")

# Check files on disk not even in index.js
not_in_index = [f for f in actual_files if f != 'index.js' and f not in asset_map.values()]
print(f"\n=== EXTRA FILES IN src/assets/images (Not in index.js): {len(not_in_index)} ===")
for f in sorted(not_in_index):
    print(f"  - {f}")
