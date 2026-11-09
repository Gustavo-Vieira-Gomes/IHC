"""Fail when any asset referenced by the Figma responses is unavailable locally."""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
sources = json.loads((ROOT / 'design/asset-sources.json').read_text())
missing = [name for name in sources if not (ROOT / 'assets/figma' / name).is_file()
           or not (ROOT / 'assets/figma' / name).stat().st_size]
for name in missing:
    print(f'Missing: {name}')
print(f'{len(sources) - len(missing)}/{len(sources)} original assets available')
referenced = set()
for source in (ROOT / 'src').rglob('*'):
    if source.suffix not in ('.ts', '.tsx'):
        continue
    for relative in re.findall(r"require\(['\"]([^'\"]+)['\"]\)", source.read_text()):
        if '/assets/' in relative:
            referenced.add((source.parent / relative).resolve())
missing_references = [path for path in referenced if not path.is_file() or not path.stat().st_size]
for path in missing_references:
    print(f'Missing runtime asset: {path}')
print(f'{len(referenced) - len(missing_references)}/{len(referenced)} runtime assets available')
sys.exit(bool(missing or missing_references))
