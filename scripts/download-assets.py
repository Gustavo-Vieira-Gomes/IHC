"""Download original Figma assets using the curl workflow returned by Figma MCP."""
import concurrent.futures
import json
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SOURCES = json.loads((ROOT / 'design/asset-sources.json').read_text())
TARGET = ROOT / 'assets/figma'
TARGET.mkdir(parents=True, exist_ok=True)

def download(item):
    name, url = item
    path = TARGET / name
    if path.exists() and path.stat().st_size:
        return True
    temporary = path.with_suffix(path.suffix + '.download')
    result = subprocess.run(['curl', '-fL', '--retry', '2', '--connect-timeout', '10',
                             '--max-time', '45', url, '-o', str(temporary)], capture_output=True)
    if result.returncode or not temporary.exists() or not temporary.stat().st_size:
        temporary.unlink(missing_ok=True)
        print(f'FAIL {name}: {result.stderr.decode().strip()}', flush=True)
        return False
    temporary.replace(path)
    print(f'OK {name}', flush=True)
    return True

if __name__ == '__main__':
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        results = list(pool.map(download, SOURCES.items()))
    print(f'{sum(results)}/{len(results)} assets available')
    sys.exit(0 if all(results) else 1)
