#!/usr/bin/env python3
"""Simple HTTP server with Range request support and optional media proxy."""

import http.server
import io
import os
import sys
import urllib.request
import urllib.error


MEDIA_PROXY_BASE: str | None = None
MEDIA_PROXY_COOKIE: str | None = None
MEDIA_PREFIX = "/media/"


class RangeRequestHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP handler that supports Range requests and proxies /media/ to a remote URL."""

    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".ttl": "text/turtle",
        ".wasm": "application/wasm",
        ".json": "application/json",
        ".js": "application/javascript",
    }

    def do_GET(self):
        if MEDIA_PROXY_BASE and self.path.startswith(MEDIA_PREFIX):
            self._proxy_media()
        else:
            super().do_GET()

    def do_HEAD(self):
        if MEDIA_PROXY_BASE and self.path.startswith(MEDIA_PREFIX):
            self._proxy_media(head_only=True)
        else:
            super().do_HEAD()

    def _proxy_media(self, head_only=False):
        remote_path = self.path[len(MEDIA_PREFIX):]
        url = f"{MEDIA_PROXY_BASE.rstrip('/')}/{remote_path}"

        try:
            req = urllib.request.Request(url, method="HEAD" if head_only else "GET")
            req.add_header("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) Gecko/20100101 Firefox/150.0")
            if MEDIA_PROXY_COOKIE:
                req.add_header("Cookie", MEDIA_PROXY_COOKIE)
            range_header = self.headers.get("Range")
            if range_header:
                req.add_header("Range", range_header)

            print(f"[proxy] {req.get_method()} {url}")
            print(f"[proxy] Cookie: {'set (' + str(len(MEDIA_PROXY_COOKIE)) + ' chars)' if MEDIA_PROXY_COOKIE else 'none'}")

            with urllib.request.urlopen(req) as resp:
                print(f"[proxy] -> {resp.status} {resp.url}")
                self.send_response(resp.status)
                for header in ("Content-Type", "Content-Length", "Content-Range",
                               "Accept-Ranges", "Last-Modified", "ETag"):
                    val = resp.getheader(header)
                    if val:
                        self.send_header(header, val)
                self.end_headers()

                if not head_only:
                    self.copyfile(resp, self.wfile)

        except urllib.error.HTTPError as e:
            print(f"[proxy] ERROR {e.code} {e.reason} for {url}")
            print(f"[proxy] Response URL: {e.url}")
            self.send_error(e.code, str(e.reason))
        except urllib.error.URLError as e:
            print(f"[proxy] URL ERROR: {e.reason} for {url}")
            self.send_error(502, f"Proxy error: {e.reason}")

    def send_head(self):
        if MEDIA_PROXY_BASE and self.path.startswith(MEDIA_PREFIX):
            self._proxy_media(head_only=True)
            return None

        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            return super().send_head()

        range_header = self.headers.get("Range")
        if range_header is None:
            return super().send_head()

        # Parse "bytes=start-end"
        try:
            range_spec = range_header.replace("bytes=", "")
            start_str, end_str = range_spec.split("-")
            file_size = os.path.getsize(path)
            start = int(start_str) if start_str else 0
            end = int(end_str) if end_str else file_size - 1
            end = min(end, file_size - 1)
            length = end - start + 1
        except (ValueError, IndexError):
            self.send_error(416, "Invalid range")
            return None

        with open(path, "rb") as fh:
            fh.seek(start)
            data = fh.read(length)
        f = io.BytesIO(data)

        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Length", str(length))
        self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()

        return f

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Range")
        self.send_header("Access-Control-Expose-Headers", "Content-Range")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()


def main():
    global MEDIA_PROXY_BASE, MEDIA_PROXY_COOKIE

    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    directory = sys.argv[2] if len(sys.argv) > 2 else "."

    # Optional: --media-proxy=<url> to proxy /media/ requests
    # Optional: --media-cookie=<cookie> to forward auth cookie
    for i, arg in enumerate(sys.argv[1:], 1):
        if arg.startswith("--media-proxy="):
            MEDIA_PROXY_BASE = arg.split("=", 1)[1]
        elif arg == "--media-proxy" and i + 1 < len(sys.argv):
            MEDIA_PROXY_BASE = sys.argv[i + 1]
        elif arg.startswith("--media-cookie="):
            MEDIA_PROXY_COOKIE = arg.split("=", 1)[1]
        elif arg == "--media-cookie" and i + 1 < len(sys.argv):
            MEDIA_PROXY_COOKIE = sys.argv[i + 1]

    os.chdir(directory)
    handler = RangeRequestHandler
    server = http.server.HTTPServer(("", port), handler)
    print(f"Serving on http://localhost:{port}")
    print(f"Directory: {os.getcwd()}")
    if MEDIA_PROXY_BASE:
        print(f"Proxying /media/ -> {MEDIA_PROXY_BASE}")
        if MEDIA_PROXY_COOKIE:
            print(f"  with auth cookie")
    server.serve_forever()


if __name__ == "__main__":
    main()
