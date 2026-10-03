from PIL import Image, ImageOps
import json
import pathlib

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "public" / "images" / "Baja 2025-2026 Images For Gallery"
OUT = ROOT / "public" / "images" / "baja-gallery"
MANIFEST = ROOT / "src" / "data" / "bajaGallery.json"

FULL_MAX = 2000   # lightbox
THUMB_MAX = 700   # grid

OUT.mkdir(parents=True, exist_ok=True)
(OUT / "thumbs").mkdir(exist_ok=True)
MANIFEST.parent.mkdir(parents=True, exist_ok=True)

entries = []
total_before = total_after = 0

for path in sorted(SRC.iterdir()):
    if path.suffix.lower() not in (".jpg", ".jpeg", ".png"):
        continue
    img = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
    name = path.stem + ".webp"

    full = img.copy()
    full.thumbnail((FULL_MAX, FULL_MAX), Image.LANCZOS)
    full.save(OUT / name, "WEBP", quality=80, method=6)

    thumb = img.copy()
    thumb.thumbnail((THUMB_MAX, THUMB_MAX), Image.LANCZOS)
    thumb.save(OUT / "thumbs" / name, "WEBP", quality=75, method=6)

    before = path.stat().st_size
    after = (OUT / name).stat().st_size + (OUT / "thumbs" / name).stat().st_size
    total_before += before
    total_after += after
    entries.append({"file": name, "w": thumb.width, "h": thumb.height})
    print(f"  {path.name}: {before//1024}KB -> {after//1024}KB")

MANIFEST.write_text(json.dumps(entries, indent=2))
print(f"\n{len(entries)} images: {total_before//1024//1024}MB -> {total_after//1024//1024}MB")
