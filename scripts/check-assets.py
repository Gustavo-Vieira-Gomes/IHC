"""Fail when any asset referenced by the Figma responses is unavailable locally."""
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
sources = json.loads((ROOT / 'design/asset-sources.json').read_text())
missing = [name for name in sources if not (ROOT / 'assets/figma' / name).is_file()
           or not (ROOT / 'assets/figma' / name).stat().st_size]
for name in missing:
    print(f'Missing: {name}')
print(f'{len(sources) - len(missing)}/{len(sources)} original assets available')
sys.exit(bool(missing))
