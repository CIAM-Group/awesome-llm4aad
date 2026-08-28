import glob, os, sys
import pdfplumber

root = r"C:\Users\16526\Desktop\1-LLM\awesome-llm4ahd\my_papers"
out = r"C:\Users\16526\Desktop\1-LLM\awesome-llm4ahd\scripts\_pdf_text.txt"
files = sorted(glob.glob(os.path.join(root, "*.pdf")))
parts = []
for f in files:
    name = os.path.basename(f)
    parts.append("=" * 80)
    parts.append("FILE: " + name)
    parts.append("=" * 80)
    try:
        with pdfplumber.open(f) as pdf:
            parts.append("PAGES: %d" % len(pdf.pages))
            # print first 3 pages
            for i in range(min(3, len(pdf.pages))):
                parts.append("\n----- PAGE %d -----" % (i + 1))
                txt = pdf.pages[i].extract_text() or ""
                parts.append(txt)
    except Exception as e:
        parts.append("ERROR: %s" % e)
    parts.append("\n")
with open(out, "w", encoding="utf-8") as fh:
    fh.write("\n".join(parts))
print("Wrote", out, "with", len(files), "files")
