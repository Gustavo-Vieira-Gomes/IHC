"""Embed the real exported Expo bundle and its local assets for file:// previews.

No screen is recreated here. The generated HTML runs the exported application.
This is useful where a development HTTP port cannot be opened.
"""
import base64
import mimetypes
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'
html = (DIST / 'index.html').read_text()
match = re.search(r'<script src="(/_expo/[^\"]+\.js)"[^>]*></script>', html)
if not match:
    raise SystemExit('Export the web application first: npx expo export --platform web')
bundle = (DIST / match.group(1).lstrip('/')).read_text()
paths = sorted(set(re.findall(r'"(/assets/[^"\n]+)"', bundle)))
for uri in paths:
    path = DIST / uri.lstrip('/')
    if not path.is_file():
        raise SystemExit(f'Exported asset missing: {uri}')
    mime = mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    data = base64.b64encode(path.read_bytes()).decode('ascii')
    bundle = bundle.replace('"' + uri + '"', '"data:' + mime + ';base64,' + data + '"')
bundle = bundle.replace('</script', '<\\/script')
html = html[:match.start()] + '<script>' + bundle + '</script>' + html[match.end():]
target = DIST / 'preview.html'
target.write_text(html)
print(f'{target}: {len(paths)} local assets embedded')
